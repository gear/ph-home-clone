"use client";
import { cn } from "@/libs/utils";
import React, { useEffect, useRef, useState } from "react";
import * as vg from "@uwdata/vgplot";
import { ChartSkeleton } from "./ChartSkeleton";

// passing fields, depends on number of fields its auto align with layout
interface PropsType {
  fields: {
    column: string;
    label: string;
    color: string;
    xlabel: string;
    ylabel: string;
  }[];
  filePath: string;
  parquetName: string;
}

const PlotColsGroup = ({ fields, filePath, parquetName }: PropsType) => {
  const plotRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  const height1Chart = 400;

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

        const parquetPath = filePath;
        const sleep_url = `${window.location.origin}${parquetPath}`;

        await coordinator.exec([vg.loadParquet(parquetName, sleep_url)]);

        const brush = vg.Selection.crossfilter();

        // helper method to generate a binned plot filtered by brush
        const makePlot = (
          column: string,
          xlabel: string,
          ylabel: string,
          color: string = "steelblue",
          index: number
        ): vg.Plot => {
          const height =
            index === 1 && fields.length === 3
              ? height1Chart * 2.4
              : height1Chart;

          return vg.plot(
            vg.rectY(vg.from(parquetName, { filterBy: brush }), {
              x: vg.bin(column),
              y: vg.count(),
              fill: color,
              inset: 0.5,
            }),
            vg.intervalX({ as: brush }),
            vg.xDomain(vg.Fixed),
            vg.marginLeft(75),
            vg.width(800),
            vg.height(height),
            vg.xLabel(xlabel),
            vg.yLabel(ylabel)
          );
        };

        // Create a container for each plot with title
        const createTitledPlot = (
          title: string,
          plot: vg.Plot,
          index: number
        ) => {
          const container = document.createElement("div");

          const className = cn(
            "border p-4 text-center",
            fields.length === 1 && "col-span-2",
            fields.length === 3 && index === 1 && "row-span-2"
          );

          // Add title
          const titleElement = document.createElement("h4");
          titleElement.textContent = title;
          titleElement.style.textAlign = "center";
          titleElement.style.marginBottom = "6px";
          container.appendChild(titleElement);
          container.className = className;

          // Add plot
          // FIXME: This is a hack to get around the type mismatch between vg.Plot and HTMLElement
          container.appendChild(plot as unknown as HTMLElement);

          return container;
        };

        const fieldsMap = fields.map((field, index) => {
          const plot = makePlot(
            field.column,
            field.xlabel,
            field.ylabel,
            field.color,
            index
          );

          const title = createTitledPlot(field.label, plot, index);

          const container = document.querySelector(`#chart-${index}`);

          return {
            title,
            container,
          };
        });

        const container = document.createElement("div");
        const className = cn(
          "grid gap-4",
          fields.length === 1 && "grid-cols-1",
          fields.length === 2 && "grid-cols-2",
          fields.length === 3 && "grid-cols-2 grid-rows-2",
          fields.length > 3 && "grid-cols-2"
        );
        container.className = className;
        fieldsMap.forEach(({ title }) => {
          container.appendChild(title);
        });

        currentPlotRef.innerHTML = "";
        currentPlotRef.appendChild(container);
        setLoading(false);
      } catch (error) {
        console.error("Type:", error);
        setLoading(false);
      }
    };

    initializePlot().catch((error) => {
      console.error(error);
    });

    // Cleanup on unmount
    return () => {
      if (plotRef.current) plotRef.current.innerHTML = "";
    };
  }, [mounted]);

  // Don't render anything until mounted
  if (!mounted) return null;

  const gridClass = cn(
    "grid gap-4",
    fields.length === 1 && "grid-cols-1",
    fields.length === 2 && "grid-cols-2",
    fields.length === 3 && "grid-cols-2 grid-rows-2",
    fields.length > 3 && "grid-cols-2"
  );

  return (
    <>
      <div ref={plotRef} />;
      {loading && (
        <div className={gridClass}>
          {fields.map((field, index) => (
            <div
              key={index}
              className={cn(
                "border p-4 text-center",
                fields.length === 1 && "col-span-2",
                fields.length === 3 && index === 1 && "row-span-2"
              )}
            >
              <div className="h-6 bg-gray-200 rounded mb-2 w-3/4 mx-auto"></div>
              <ChartSkeleton
                height={
                  index === 1 && fields.length === 3
                    ? height1Chart * 2.4
                    : height1Chart
                }
                showTitle={false}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PlotColsGroup;
