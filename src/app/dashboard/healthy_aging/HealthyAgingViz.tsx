"use client";
import { useEffect, useMemo } from "react";
import * as Plot from "@observablehq/plot";
import { DatasetProps } from "@/types/sleep";
// import { healthyAgingData, weekdayData } from "./data";
import { SleepMosaicPlot } from "./SleepMosaicPlot";

/* eslint-disable react/display-name */
export const HealthyAgingViz = ({ ageDistributionRef, weekdayPlotRef }: DatasetProps) => {
  const healthyAgingData = useMemo(
    () => ({
      participants: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        age: Math.floor(80 + Math.random() * 10), // Random ages between 80-90
      })),
    }),
    []
  );

  const weekdayData = [
    { day: "Monday", avgSleep: 7.2 },
    { day: "Tuesday", avgSleep: 6.8 },
    { day: "Wednesday", avgSleep: 7.5 },
    { day: "Thursday", avgSleep: 6.9 },
    { day: "Friday", avgSleep: 6.5 },
    { day: "Saturday", avgSleep: 8.1 },
    { day: "Sunday", avgSleep: 7.8 },
  ];

  useEffect(() => {
    const ageDistributionCurrent = ageDistributionRef.current;
    const weekdayPlotCurrent = weekdayPlotRef?.current;
    if (!ageDistributionCurrent || !weekdayPlotCurrent) return;
    // Store refs in variables to avoid stale refs in cleanup
    // Clear previous plots
    ageDistributionCurrent.innerHTML = "";
    weekdayPlotCurrent.innerHTML = "";

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

    ageDistributionCurrent.appendChild(ageDistPlot);
    weekdayPlotCurrent.appendChild(weekdayPlot);

    return () => {
      if (ageDistributionCurrent) ageDistributionCurrent.innerHTML = "";
      if (weekdayPlotCurrent) weekdayPlotCurrent.innerHTML = "";
    };
  }, [ageDistributionRef, weekdayPlotRef]);

  return (
    <>
      <p className="text font text-gray-550 text-center">This project aims to study healthy aging by analyzing activity tracker and biomarker data from 150 participants, including Fitbit and Oura Ring data for sleep and activity patterns, and Olink blood inflammation markers to understand key proteins in healthy aging.</p>
      <h2 className="text-2xl font-bold text-gray-700">⌚ Insights from Wearable Devices</h2>
      <p className="text font text-gray-550 text-center">We continuously track activity levels and sleep behavior of the population using Fitbit and Oura ring devices. On average a single participant was observed for 365.3 (±32.3) days.</p>
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
