"use client";
import { useEffect, useRef } from 'react';
import * as vg from "@uwdata/vgplot";

export const SleepMosaicPlot = () => {
  const plotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('=== SleepMosaicPlot mounted ===');

    const initializePlot = async () => {
      console.log('=== initializePlot started ===');
      if (!plotRef.current) {
        console.log('plotRef is null');
        return;
      }

      try {
        const coordinator = vg.coordinator();
        await coordinator.databaseConnector(vg.wasmConnector());

        const parquetPath = "/data/fitbit_main_sleep.parquet";
        console.info('Creating FileAttachment for:', parquetPath);
        const sleep_url = `${window.location.origin}/data/fitbit_main_sleep.parquet`;
        console.info('File URL:', sleep_url);

        await coordinator.exec([vg.loadParquet("sleep_patterns", sleep_url)]);

        const brush = vg.Selection.crossfilter();

        const makeSleepOnsetPlot = () => vg.plot(
          vg.rectY(vg.from("sleep_patterns", { filterBy: brush }), {
            x: vg.bin("start_hour", { thresholds: 24 }),
            y: vg.count(),
            fill: "steelblue",
            inset: 0.5
          }),
          vg.intervalX({ as: brush }),
          vg.xDomain(vg.Fixed),
          vg.marginLeft(75),
          vg.width(600),
          vg.height(200),
          vg.xLabel("Sleep Onset Time (hour)"),
          vg.yLabel("Number of Records")
        );

        const makeWakeTimePlot = () => vg.plot(
          vg.rectY(
            vg.from("sleep_patterns", { filterBy: brush }),
            {
              x: vg.bin("end_hour", { thresholds: 24 }),
              y: vg.count(),
              fill: "#8B4513",
              inset: 0.5
            }
          ),
          // vg.xDomain([3, 11]), // 3AM to 11AM
          vg.xLabel("Wake-up Time (hour)"),
          vg.yLabel("Number of Records"),
          vg.marginLeft(75),
          vg.width(600),
          vg.height(200)
        );

        const makeSleepDurationPlot = () => vg.plot(
          vg.rectY(
            vg.from("sleep_patterns", { filterBy: brush }),
            {
              x: vg.bin("FB_minutesasleep_stages", { thresholds: 24 }),
              y: vg.count(),
              fill: "darkgreen",
              inset: 0.5
            }
          ),
          vg.xLabel("Sleep Duration (minutes)"),
          vg.yLabel("Number of Records"),
          vg.marginLeft(75),
          vg.width(600),
          vg.height(200)
        );

        const dashboard = vg.vconcat(
          makeSleepOnsetPlot(),
          makeWakeTimePlot(),
          makeSleepDurationPlot()
        );

        plotRef.current.innerHTML = '';
        plotRef.current.appendChild(dashboard);

      } catch (error) {
        console.error('Type:', error);
      }
    };

    initializePlot().catch(error => {
      console.error(error);
    });

    return () => {
      if (plotRef.current) {
        plotRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={plotRef} />;
};
