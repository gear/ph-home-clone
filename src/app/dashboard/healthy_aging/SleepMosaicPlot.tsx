"use client";
import { useEffect, useRef, useState } from "react";
import * as vg from "@uwdata/vgplot";

/* eslint-disable react/display-name */
export const SleepMosaicPlot = () => {
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

        const parquetPath = "/data/fitbit_main_sleep.parquet";
        const sleep_url = `${window.location.origin}${parquetPath}`;

        await coordinator.exec([vg.loadParquet("sleep_patterns", sleep_url)]);

        const brush = vg.Selection.crossfilter();

        // helper method to generate a binned plot filtered by brush
        const makePlot = (
          column: string,
          xlabel: string,
          ylabel: string,
          color: string = "steelblue"
        ): vg.Plot => {
          return vg.plot(
            vg.rectY(vg.from("sleep_patterns", { filterBy: brush }), {
              x: vg.bin(column),
              y: vg.count(),
              fill: color,
              inset: 0.5,
            }),
            vg.intervalX({ as: brush }),
            vg.xDomain(vg.Fixed),
            vg.marginLeft(75),
            vg.width(600),
            vg.height(200),
            vg.xLabel(xlabel),
            vg.yLabel(ylabel)
          );
        };

        // Create a container for each plot with title
        const createTitledPlot = (title: string, plot: vg.Plot) => {
          const container = document.createElement('div');

          // Add title
          const titleElement = document.createElement('h4');
          titleElement.textContent = title;
          titleElement.style.textAlign = 'center';
          titleElement.style.marginBottom = '6px';
          container.appendChild(titleElement);

          // Add plot
          // FIXME: This is a hack to get around the type mismatch between vg.Plot and HTMLElement
          container.appendChild(plot as unknown as HTMLElement);

          return container;
        };

        // Create individual plots
        const sleepOnsetPlot = makePlot("start_hour", "Sleep onset (hour)", "Number of observations");
        const wakeUpPlot = makePlot("end_hour", "Wake-up time (hour)", "Number of observations", "#8B4513");
        const durationPlot = makePlot("FB_minutesasleep_stages", "Sleep duration (minutes)", "Number of observations", "green");

        // Create titled containers
        const titledSleepOnset = createTitledPlot("Sleep Onset Time", sleepOnsetPlot);
        const titledWakeUp = createTitledPlot("Wake-up Time", wakeUpPlot);
        const titledDuration = createTitledPlot("Sleep Duration", durationPlot);

        // Create master container
        const container = document.createElement('div');
        container.appendChild(titledSleepOnset);
        container.appendChild(titledWakeUp);
        container.appendChild(titledDuration);

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
