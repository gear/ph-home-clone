"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import * as Plot from "@observablehq/plot";
import { SleepMosaicPlot } from "./SleepMosaicPlot";

const weekdayData = [
  { day: "Monday", avgSleep: 7.2 },
  { day: "Tuesday", avgSleep: 6.8 },
  { day: "Wednesday", avgSleep: 7.5 },
  { day: "Thursday", avgSleep: 6.9 },
  { day: "Friday", avgSleep: 6.5 },
  { day: "Saturday", avgSleep: 8.1 },
  { day: "Sunday", avgSleep: 7.8 },
];

export const SleepBarPlot = () => {
  const [selectedDataset, setSelectedDataset] = useState("healthy-aging");
  const individualPlotRef = useRef<HTMLDivElement>(null);
  const weekdayPlotRef = useRef<HTMLDivElement>(null);
  const ageDistributionRef = useRef<HTMLDivElement>(null);

  // Utilizing useMemo to memoize the sample data for Healthy Aging and JMDC datasets
  const healthyAgingData = useMemo(
    () => ({
      sleep: [
        { name: "Person 1", sleepHours: 7.2 },
        { name: "Person 2", sleepHours: 6.8 },
        { name: "Person 3", sleepHours: 8.1 },
        { name: "Person 4", sleepHours: 7.5 },
        { name: "Person 5", sleepHours: 6.5 },
        { name: "Person 6", sleepHours: 4.5 },
        { name: "Person 7", sleepHours: 8.3 },
        { name: "Person 8", sleepHours: 6.9 },
        { name: "Person 9", sleepHours: 7.6 },
        { name: "Person 10", sleepHours: 7.1 },
        { name: "Person 11", sleepHours: 8.0 },
        { name: "Person 12", sleepHours: 7.3 },
        { name: "Person 13", sleepHours: 6.7 },
        { name: "Person 14", sleepHours: 7.9 },
        { name: "Person 15", sleepHours: 8.2 },
      ],
      participants: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        age: Math.floor(80 + Math.random() * 10), // Random ages between 80-90
      })),
    }),
    []
  );

  const jmdcData = useMemo(
    () => ({
      participants: Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        age: Math.floor(25 + Math.random() * 40), // Random ages between 25-65
      })),
    }),
    []
  );

  useEffect(() => {
    if (!ageDistributionRef.current) return;

    // Store refs in variables to avoid stale refs in cleanup
    const ageDistributionCurrent = ageDistributionRef.current;
    const individualPlotCurrent = individualPlotRef.current;
    const weekdayPlotCurrent = weekdayPlotRef.current;

    // Clear previous age distribution plot
    ageDistributionCurrent.innerHTML = "";

    // Create age distribution plot
    const data =
      selectedDataset === "healthy-aging"
        ? healthyAgingData.participants
        : jmdcData.participants;

    const ageDistPlot = Plot.plot({
      marginLeft: 60,
      height: 300,
      x: {
        label: "Age (years)",
        domain: selectedDataset === "healthy-aging" ? [75, 95] : [20, 70],
      },
      y: {
        label: "Number of Participants",
        grid: true,
      },
      marks: [
        Plot.rectY(
          data,
          Plot.binX(
            { y: "count" },
            {
              x: "age",
            }
          )
        ),
        Plot.ruleY([0]),
      ],
    });

    ageDistributionCurrent.appendChild(ageDistPlot);

    if (selectedDataset === "healthy-aging") {
      if (individualPlotCurrent && weekdayPlotCurrent) {
        // Clear previous plots
        individualPlotCurrent.innerHTML = "";
        weekdayPlotCurrent.innerHTML = "";

        // Create individual sleep duration plot
        const individualPlot = Plot.plot({
          marginLeft: 60,
          height: 400,
          x: { label: "Sleep Hours" },
          y: { label: "Person" },
          marks: [
            Plot.barX(healthyAgingData.sleep, {
              y: "name",
              x: "sleepHours",
              fill: "steelblue",
              title: (d) => `${d.sleepHours.toFixed(1)} hours`,
            }),
            Plot.ruleX([0]),
          ],
        });

        // Create weekday average sleep plot
        const weekdayPlot = Plot.plot({
          marginLeft: 60,
          height: 300,
          x: {
            label: "Day of Week",
            domain: weekdayData.map((d) => d.day),
          },
          y: {
            label: "Average Sleep Duration (hours)",
            grid: true,
          },
          marks: [
            Plot.barY(weekdayData, {
              x: "day",
              y: "avgSleep",
              fill: "#8B4513",
              title: (d) =>
                `${d.day}\nAverage: ${d.avgSleep.toFixed(1)} hours\n`, // Updated tooltip
            }),
            Plot.ruleY([0]),
          ],
        });

        // Append plots to containers
        individualPlotCurrent.appendChild(individualPlot);
        weekdayPlotCurrent.appendChild(weekdayPlot);
      }
    }

    return () => {
      if (ageDistributionCurrent) ageDistributionCurrent.innerHTML = "";
      if (individualPlotCurrent) individualPlotCurrent.innerHTML = "";
      if (weekdayPlotCurrent) weekdayPlotCurrent.innerHTML = "";
    };
  }, [
    selectedDataset,
    healthyAgingData.participants,
    healthyAgingData.sleep,
    jmdcData.participants,
  ]);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">Select a dataset:</span>
        <div className="w-64">
          <select
            value={selectedDataset}
            onChange={(e) => setSelectedDataset(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="healthy-aging">Healthy Aging</option>
            <option value="jmdc">JMDC</option>
          </select>
        </div>
      </div>

      <div className="text-2xl font-bold text-gray-700">
        {selectedDataset === "healthy-aging" ? "Healthy Aging" : "JMDC"}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Age Distribution
        </h3>
        <div ref={ageDistributionRef} />
      </div>

      {selectedDataset === "healthy-aging" ? (
        <>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Sleep Analysis
            </h3>
            <div ref={individualPlotRef} />
            <div className="grid grid-cols-1 gap-4">
              <div ref={weekdayPlotRef} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Sleep Data Analysis
            </h3>
            <SleepMosaicPlot />
          </div>
        </>
      ) : null}
    </div>
  );
};
