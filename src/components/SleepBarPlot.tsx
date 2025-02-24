"use client";
import { useRef, useState } from "react";
import { HealthyAgingViz } from "./sleep/HealthyAgingViz";
import { JMDCViz } from "./sleep/JMDCViz";

export const SleepBarPlot = () => {
  const [selectedDataset, setSelectedDataset] = useState("healthy-aging");
  const weekdayPlotRef = useRef<HTMLDivElement>(null);
  const ageDistributionRef = useRef<HTMLDivElement>(null);

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

      {selectedDataset === "healthy-aging" ? (
        <HealthyAgingViz 
          ageDistributionRef={ageDistributionRef}
          weekdayPlotRef={weekdayPlotRef}
        />
      ) : (
        <JMDCViz 
          ageDistributionRef={ageDistributionRef}
        />
      )}
    </div>
  );
};
