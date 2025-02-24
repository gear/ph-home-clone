"use client";
import { useEffect } from "react";
import * as Plot from "@observablehq/plot";
import { DatasetProps } from "@/types/sleep";
import { healthyAgingData, weekdayData } from "./data";
import { SleepMosaicPlot } from "../SleepMosaicPlot";

export const HealthyAgingViz = ({ ageDistributionRef, weekdayPlotRef }: DatasetProps) => {
  useEffect(() => {
    if (!ageDistributionRef.current || !weekdayPlotRef?.current) return;

    // Clear previous plots
    ageDistributionRef.current.innerHTML = "";
    weekdayPlotRef.current.innerHTML = "";

    // Create age distribution plot
    const ageDistPlot = Plot.plot({
      marginLeft: 60,
      height: 300,
      x: { label: "Age (years)", domain: [75, 95] },
      y: { label: "Number of Participants", grid: true },
      marks: [
        Plot.rectY(
          healthyAgingData.participants,
          Plot.binX(
            { y: "count" },
            {
              x: "age",
              fill: "steelblue",
              title: (d) =>
                `${d.count} participants\nAge: ${Math.floor(d.age)}-${Math.floor(d.age + 5)}`,
              thresholds: 10,
            }
          )
        ),
        Plot.ruleY([0])
      ]
    });

    // Create weekday plot
    const weekdayPlot = Plot.plot({
      marginLeft: 60,
      height: 300,
      x: { label: "Day of Week", domain: weekdayData.map(d => d.day) },
      y: { label: "Average Sleep Duration (hours)", grid: true },
      marks: [
        Plot.barY(weekdayData, {
          x: "day",
          y: "avgSleep",
          fill: "#8B4513",
          title: (d) => `${d.day}\nAverage: ${d.avgSleep.toFixed(1)} hours\n`,
        }),
        Plot.ruleY([0])
      ]
    });

    ageDistributionRef.current.appendChild(ageDistPlot);
    weekdayPlotRef.current.appendChild(weekdayPlot);

    return () => {
      if (ageDistributionRef.current) ageDistributionRef.current.innerHTML = "";
      if (weekdayPlotRef.current) weekdayPlotRef.current.innerHTML = "";
    };
  }, [ageDistributionRef, weekdayPlotRef]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Age Distribution</h3>
          <div ref={ageDistributionRef} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Sleep Analysis</h3>
          <div className="grid grid-cols-1 gap-4">
            <div ref={weekdayPlotRef} />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Sleep Data Analysis</h3>
        <SleepMosaicPlot />
      </div>
    </>
  );
};

export default HealthyAgingViz;
