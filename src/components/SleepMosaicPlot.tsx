"use client";
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import * as vg from "@uwdata/vgplot";

export const SleepMosaicPlot = () => {
  const plotRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initializePlot = async () => {
      setMounted(true);
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
        const sleep_url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_DATA_PATH}`;
        console.info('File URL:', sleep_url);

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
              inset: 0.5
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

        const dashboard = vg.vconcat(
          makePlot("start_hour", "Sleep onset (hour)", "Number of records"),
          makePlot("end_hour", "Wake-up time (hour)", "Number of records", "#8B4513"),
          makePlot(
            "FB_minutesasleep_stages",
            "Sleep duration (minutes)",
            "Number of records",
            "green"
          )
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
  }, [mounted]);

  // Don't render anything until mounted
  if (!mounted) return null;

  return <div ref={plotRef} />;
};
