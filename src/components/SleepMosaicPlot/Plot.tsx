"use client";
import { useEffect, useRef } from 'react';
import * as vg from "@uwdata/vgplot";

const Plot = () => {
  const plotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializePlot = async () => {
      if (!plotRef.current) return;

      try {
        if (!process.env.NEXT_PUBLIC_BASE_URL || !process.env.NEXT_PUBLIC_DATA_PATH) {
          throw new Error('Missing required environment variables');
        }

        const coordinator = vg.coordinator();
        await coordinator.databaseConnector(vg.wasmConnector());

        const sleep_url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_DATA_PATH}`;
        console.info('Loading data from:', sleep_url);

        await coordinator.exec([vg.loadParquet("sleep_patterns", sleep_url)]);

        // ...existing code...
      } catch (error) {
        console.error('Error initializing plot:', error);
      }
    };

    initializePlot();
  }, []);

  return <div ref={plotRef} />;
};

export default Plot;
