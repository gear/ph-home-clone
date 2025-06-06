"use client";
import { useEffect, useRef, useState } from "react";
import * as vg from "@uwdata/vgplot";

/* eslint-disable react/display-name */
const SHIDashboard = () => {
  const plotRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Store a reference to the current value of plotRef to use in cleanup
    const currentPlotRef = plotRef.current;
    const initializePlot = async () => {
      setMounted(true);
      console.log("=== initializePlot started ===");
      if (!currentPlotRef) {
        console.log("plotRef is null");
        return;
      }

      try {
        const coordinator = vg.coordinator();
        await coordinator.databaseConnector(vg.wasmConnector());

        const csvPath = "/data/subject-001.parquet";
        const data_url = `${window.location.origin}${csvPath}`;

        console.log("🚀 ~ initializePlot ~ data_url:", data_url);
        // Load data and convert time to minutes
        await coordinator.exec([
          vg.loadParquet("heart_rate_raw", data_url),
          vg.sql`CREATE TABLE heart_rate AS 
            SELECT 
              id,
              (CAST(SPLIT_PART(time, ':', 1) AS INTEGER) * 60 + 
               CAST(SPLIT_PART(time, ':', 2) AS INTEGER)) as time_minutes,
              hr_min
            FROM heart_rate_raw`,
        ]);

        const brush = vg.Selection.crossfilter();
        console.log(
          await coordinator.manager.db.query("SELECT * FROM heart_rate")
        );

        // Create a plot for heart rate data
        const heartRatePlot = vg.plot(
          vg.rectY(vg.from("heart_rate", { filterBy: brush }), {
            x: vg.bin("time_minutes"),
            y: "hr_min",
            fill: "steelblue",
            inset: 0,
          }),
          vg.intervalX({ as: brush }),
          vg.xDomain(vg.Fixed),
          vg.marginLeft(75),
          vg.width(800),
          vg.height(400),
          vg.xLabel("Time (minutes)"),
          vg.yLabel("Heart Rate (bpm)")
        );

        // Create a container for the plot with title
        const container = document.createElement("div");

        // Add title
        const titleElement = document.createElement("h4");
        titleElement.textContent = "Heart Rate Over Time";
        titleElement.style.textAlign = "center";
        titleElement.style.marginBottom = "6px";
        container.appendChild(titleElement);

        // Add plot
        container.appendChild(heartRatePlot as unknown as HTMLElement);

        currentPlotRef.innerHTML = "";
        currentPlotRef.appendChild(container);
      } catch (error) {
        console.error("Type:", error);
      }
    };

    initializePlot().catch((error) => {
      console.error(error);
    });

    return () => {
      if (currentPlotRef) {
        currentPlotRef.innerHTML = "";
      }
    };
  }, [mounted]);

  // Don't render anything until mounted
  if (!mounted) return null;

  return <div ref={plotRef} />;
};

export default SHIDashboard;
