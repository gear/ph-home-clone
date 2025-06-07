"use client";

import React, { useEffect, useRef } from "react";
import * as vg from "@uwdata/vgplot";
import { withClientSideRendering } from "@/components/hoc";

// Predefined colors for lines (wraps if more subjects than colors)
const colors = [
  "steelblue",
  "orange",
  "seagreen",
  "purple",
  "crimson",
  "teal",
  "goldenrod",
];

interface HeartBeatRateChartProps {
  /*
   *  format:
   *  id,time,hr_min
   *  001,00:00,100
   *  001,00:01,101
   *  001,00:02,102
   *  001,00:03,103
   *  001,00:04,104
   */
  csvPaths: string[];
  width?: number;
  height?: number;
  text?: string;
}

const HeartBeatRateChart: React.FC<HeartBeatRateChartProps> = ({
  csvPaths,
  width = 1040,
  height = 600,
  text = "Line",
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = chartRef.current;
    if (!container) return;

    let initialized = false;

    (async () => {
      const coord = vg.coordinator();
      await coord.databaseConnector(vg.wasmConnector());

      // Derive subject metadata from csvPaths
      const subjects = csvPaths.map((path, index) => {
        // Extract numeric id from filename: subject_001.csv
        const rawTable = `heart_rate_raw_${index}`;
        const endpointTable = `endpoint_${index}`;
        const dataUrl = `${window.location.origin}${path}`;
        return { rawTable, endpointTable, dataUrl };
      });

      // Build exec commands dynamically
      const commands: string[] = [];

      // Load and prepare each table
      subjects.forEach(({ rawTable, dataUrl }) => {
        commands.push(vg.loadCSV(rawTable, dataUrl));
      });

      // Add time_hours column if not exists and compute fractional hours
      subjects.forEach(({ rawTable }) => {
        commands.push(
          `ALTER TABLE ${rawTable} ADD COLUMN IF NOT EXISTS time_hours REAL`
        );
        commands.push(
          `UPDATE ${rawTable}
          SET time_hours =
            CAST(SUBSTR(CAST(time AS VARCHAR), 1, 2) AS REAL)
          + CAST(SUBSTR(CAST(time AS VARCHAR), 4, 2) AS REAL) / 60`
        );
      });

      // Drop and recreate endpoint tables
      subjects.forEach(({ rawTable, endpointTable }) => {
        commands.push(`DROP TABLE IF EXISTS ${endpointTable}`);
        commands.push(
          `CREATE TABLE IF NOT EXISTS ${endpointTable} AS
            SELECT * FROM ${rawTable}
            ORDER BY hr_min DESC
            LIMIT 1`
        );
      });

      // Execute all setup commands
      await coord.exec(commands);
      const brush = vg.Selection.crossfilter();

      // Build plot layers
      const layers: any[] = [];
      subjects.forEach(({ rawTable, endpointTable }, i) => {
        const color = colors[i % colors.length];

        // Line layer
        layers.push(
          vg.lineY(vg.from(rawTable), {
            x: "time_hours",
            y: "hr_min",
            stroke: color,
            strokeOpacity: 0.7,
            curve: "monotone-x",
          })
        );

        // Endpoint text layer
        layers.push(
          vg.text(vg.from(endpointTable), {
            x: "time_hours",
            y: "hr_min",
            text: [`${text} ${i + 1}`],
            fill: color,
            lineAnchor: "bottom",
            dy: -6,
          })
        );
      });

      // Add axes, labels, grid, size
      const chart = vg.plot(
        ...layers,
        vg.intervalX({ as: brush }),
        vg.xLabel("Time (h)"),
        vg.yGrid(true),
        vg.yLabel("↑ Heart Rate (bpm)"),
        vg.yTickFormat("s"),
        vg.width(width),
        vg.height(height)
      );

      // Mount chart once
      if (!initialized) {
        container.innerHTML = "";
        container.appendChild(chart as unknown as HTMLElement);
        initialized = true;
      }
    })().catch(console.error);

    // Cleanup on unmount
    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div style={{ textAlign: "center", padding: 16 }}>
      <h2>Heart Rate Data</h2>
      <div ref={chartRef} />
    </div>
  );
};

export default withClientSideRendering(HeartBeatRateChart);
