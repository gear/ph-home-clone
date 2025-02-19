"use client";
import { useEffect, useRef } from 'react';
import * as vgplot from "@uwdata/vgplot";

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
        const coordinator = vgplot.coordinator();
        console.log('=== PATHS INFO ===');
        console.log('Window location:', window.location.href);
        console.log('Base URL:', window.location.origin);
        
        await coordinator.databaseConnector(vgplot.wasmConnector());
        
        const parquetPath = "/data/fitbit_main_sleep.parquet";
        console.info('Creating FileAttachment for:', parquetPath);
        const sleep_url = `${window.location.origin}/data/fitbit_main_sleep.parquet`;
        console.info('File URL:', sleep_url);
        
        await coordinator.exec([vgplot.loadParquet("sleep_patterns", sleep_url)]);

        const brush = vgplot.Selection.crossfilter();

        const makeSleepOnsetPlot = () => vgplot.plot(
          vgplot.rectY(vgplot.from("sleep_patterns", { filterBy: brush }), {
            x: vgplot.bin("start_hour", { thresholds: 24 }),
            y: vgplot.count(),
            fill: "steelblue",
            inset: 0.5
          }),
          vgplot.intervalX({ as: brush }),
          vgplot.xDomain(vgplot.Fixed),
          vgplot.marginLeft(75),
          vgplot.width(600),
          vgplot.height(200)
        );

        const makeWakeTimePlot = () => vgplot.plot(
          vgplot.rectY(
            vgplot.from("sleep_patterns", { filterBy: brush }),
            { 
              x: vgplot.bin("end_hour", { thresholds: 24 }),
              y: vgplot.count(),
              fill: "#8B4513",
              title: (d: any) => {
                const count = d?.count ?? 0;
                const hour = d?.end_hour ?? 'N/A';
                const minutes = d?.end_minutes != null 
                  ? Math.floor(d.end_minutes).toString().padStart(2, '0')
                  : '00';
                return `${count} records\nWake time: ${hour}:${minutes}`;
              },
              inset: 0.5
            }
          ),
          vgplot.xDomain([3, 11]), // 3AM to 11AM
          vgplot.xLabel("Wake-up Time (hour)"),
          vgplot.yLabel("Number of Records"),
          vgplot.marginLeft(75),
          vgplot.width(600),
          vgplot.height(200)
        );

        const makeSleepDurationPlot = () => vgplot.plot(
          vgplot.rectY(
            vgplot.from("sleep_patterns", { filterBy: brush }),
            { 
              x: vgplot.bin("FB_minutesasleep_stages", { thresholds: 24 }),
              y: vgplot.count(),
              fill: "darkgreen",
              title: (d: any) => {
                const count = d?.count ?? 0;
                const duration = d?.sleep_duration != null 
                  ? Number(d.sleep_duration).toFixed(1) 
                  : 'N/A';
                return `${count} records\nSleep duration: ${duration} hours`;
              },
              inset: 0.5
            }
          ),
          vgplot.xDomain([4, 12]), // 4 to 12 hours
          vgplot.xLabel("Sleep Duration (hours)"),
          vgplot.yLabel("Number of Records"),
          vgplot.marginLeft(75),
          vgplot.width(600),
          vgplot.height(200)
        );

        const dashboard = vgplot.vconcat(
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
