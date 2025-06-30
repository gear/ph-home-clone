"use client";

import PlotColsGroup from "@/components/PlotColsGroup";
import NavBarNextPrev from "../components/NavBarNextPrev";

export default function SHIDashboard() {
  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">
      <NavBarNextPrev index={1} />

      <h1 className="text-5xl font-bold">SHI Summer School July 2025</h1>

      <h2 className="text-3xl font-bold mt-8">
        Sleep Architecture: Light/REM/Deep
      </h2>

      <h3 className="text-2xl font-bold">Caffeine Consumption / Deep Sleep</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Caffeine Consumption: Cups per day</li>
          <li>Deep Sleep Time: Minute</li>
        </ul>
      </span>

      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Caffeine Consumption",
            column: "start_hour",
            xlabel: "Amount per day (cup)",
            ylabel: "Number of records",
          },
          {
            color: "darkblue",
            label: "Deep Sleep Time",
            column: "FB_minutesasleep_stages",
            xlabel: "Deep Sleep Time (minutes)",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/fitbit_main_sleep.parquet"
        parquetName="deep_sleep_time"
      />

      <h3 className="text-2xl font-bold">Caffeine Consumption / REM Sleep</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Caffeine Consumption: Cups per day</li>
          <li>Sleep Start Time: 24-hour</li>
        </ul>
      </span>

      <PlotColsGroup
        fields={[
          {
            color: "steelblue",
            label: "Sleep Onset Time",
            column: "start_hour",
            xlabel: "Sleep onset (hour)",
            ylabel: "Number of records",
          },
          {
            color: "green",
            label: "Sleep Duration",
            column: "FB_minutesasleep_stages",
            xlabel: "Sleep duration (minutes)",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/fitbit_main_sleep.parquet"
        parquetName="rem_sleep_time"
      />
    </div>
  );
}
