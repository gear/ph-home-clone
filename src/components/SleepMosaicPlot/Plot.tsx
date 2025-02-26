"use client";
import { useEffect, useRef, useState } from "react";
import * as vg from "@uwdata/vgplot";

const Plot = () => {
  const plotRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Store ref value in a variable to avoid the stale ref issue
    const currentRef = plotRef.current;

    const initializePlot = async () => {
      try {
        if (
          !process.env.NEXT_PUBLIC_BASE_URL ||
          !process.env.NEXT_PUBLIC_DATA_PATH
        ) {
          throw new Error("Missing required environment variables");
        }

        // Wait for plotRef to be available
        if (!currentRef) {
          return;
        }

        // Clear any existing content
        while (currentRef.firstChild) {
          currentRef.removeChild(currentRef.firstChild);
        }

        const coordinator = vg.coordinator();
        await coordinator.databaseConnector(vg.wasmConnector());

        const sleep_url = `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_DATA_PATH}`;
        console.info("Loading data from:", sleep_url);

        await coordinator.exec([vg.loadParquet("sleep_patterns", sleep_url)]);

        setIsLoading(false);
      } catch (error) {
        console.error("Error initializing plot:", error);
        setIsLoading(false);
      }
    };

    initializePlot();

    // Cleanup function
    return () => {
      if (currentRef) {
        while (currentRef.firstChild) {
          currentRef.removeChild(currentRef.firstChild);
        }
      }
    };
  }, []);

  if (isLoading) {
    return <div>Loading plot...</div>;
  }

  return <div ref={plotRef} className="w-full h-full"></div>;
};

export default Plot;
