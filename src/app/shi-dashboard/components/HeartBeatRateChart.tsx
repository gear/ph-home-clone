"use client";

import React, { useEffect, useRef } from "react";
import * as vg from "@uwdata/vgplot";
import { withClientSideRendering } from "@/components/hoc";
import StatsBox from "./StatsBox";
import { cn } from "@/libs/utils";

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
  csvPaths: {
    path: string;
    color: string;
    label: string;
  }[];
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
  const chartZoomRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const container = chartRef.current;
    const containerZoomed = chartZoomRef.current;
    if (!container || !containerZoomed) return;

    if (!csvPaths.length) {
      setLoading(false);
      return;
    }

    let initialized = false;

    (async () => {
      const coord = vg.coordinator();
      await coord.databaseConnector(vg.wasmConnector());

      // Derive subject metadata from csvPaths
      const subjects = csvPaths.map(({ color, path, label }, index) => {
        // Extract numeric id from filename: subject_001.csv
        const rawTable = `heart_rate_raw_${index}`;
        const endpointTable = `endpoint_${index}`;
        const dataUrl = `${window.location.origin}${path}`;
        return { rawTable, endpointTable, dataUrl, color, label };
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
      const layersText: any[] = [];
      subjects.forEach(({ rawTable, color }, i) => {
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
      });

      subjects.forEach(({ endpointTable, color, label }, i) => {
        // Endpoint text layer
        layersText.push(
          vg.text(vg.from(endpointTable), {
            x: "time_hours",
            y: "hr_min",
            text: [label],
            fill: color,
            lineAnchor: "bottom",
            dy: -6,
          })
        );
      });

      // Add axes, labels, grid, size
      const chart = vg.plot(
        ...layers,
        ...layersText,
        vg.intervalX({ as: brush }),
        vg.xLabel("Time (h)"),
        vg.yGrid(true),
        vg.yLabel("↑ Heart Rate (bpm)"),
        vg.yTickFormat("s"),
        vg.width(width),
        vg.height(height)
      );

      const scaleWidthPercent = 0.6;

      const chartZoomed = vg.plot(
        ...layers,
        ...layersText,
        vg.xDomain(brush),
        vg.yGrid(true),
        vg.yTickFormat("s"),
        vg.width(width * scaleWidthPercent),
        vg.height(height),
        vg.xLabel("Time (h)"),
        vg.yLabel("↑ Heart Rate (bpm)")
      );

      // Mount chart once
      if (!initialized) {
        container.innerHTML = "";
        containerZoomed.innerHTML = "";
        container.appendChild(chart as unknown as HTMLElement);
        containerZoomed.appendChild(chartZoomed as unknown as HTMLElement);
        initialized = true;
      }

      setLoading(false);
    })().catch(console.error);

    // Cleanup on unmount
    return () => {
      if (container) container.innerHTML = "";
      if (containerZoomed) containerZoomed.innerHTML = "";
    };
  }, []);

  const noData = csvPaths.length === 0;

  return (
    <>
      <div
        className={cn(
          "flex items-center h-[400px] justify-center",
          !loading && "hidden"
        )}
      >
        <span className="text-gray-500">Loading...</span>
      </div>

      <div
        className={cn(
          "flex items-center h-[400px] justify-center",
          (loading || !noData) && "hidden"
        )}
      >
        <span className="text-gray-500">
          You have not selected any data yet
        </span>
      </div>

      <div
        className={cn("flex flex-col gap-4", (loading || noData) && "hidden")}
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 grow">
            <StatsBox
              label="30-year fixed-rate"
              rate="7.22%"
              rows={[
                {
                  label: "1-week change",
                  rate: "+0.05%",
                },
                {
                  label: "1-year change",
                  rate: "+0.83%",
                },
                {
                  label: "4-week average",
                  rate: "7.09%",
                },
                {
                  label: "52-week average",
                  rate: "6.97%",
                },
              ]}
              color="blue"
            />

            <StatsBox
              label="15-year fixed-rate"
              rate="6.47%"
              rows={[
                {
                  label: "1-week change",
                  rate: "+0.03%",
                },
                {
                  label: "1-year change",
                  rate: "+0.71%",
                },
                {
                  label: "4-week average",
                  rate: "6.37%",
                },
                {
                  label: "52-week average",
                  rate: "6.29%",
                },
              ]}
              color="yellow"
            />
          </div>

          <div className="bg-slate-100 rounded-md p-6 w-fit">
            <h2 className="text-start mb-2">Heart Rate Zoomed</h2>
            <div ref={chartZoomRef} className="w-fit" />
          </div>
        </div>

        <div className="bg-slate-100 rounded-md p-6">
          <h2 className="text-start mb-2">Heart Rate Data</h2>
          <div ref={chartRef} />
        </div>
      </div>
    </>
  );
};

export default withClientSideRendering(HeartBeatRateChart);
