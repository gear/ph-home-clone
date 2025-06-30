"use client";

import PlotColsGroup from "@/components/PlotColsGroup";
import NavBarNextPrev from "../components/NavBarNextPrev";

export default function SHIDashboard() {
  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">
      <NavBarNextPrev index={2} />

      <h1 className="text-5xl font-bold">SHI Summer School July 2025</h1>

      <h2 className="text-3xl font-bold mt-8">Sleep Parameters</h2>

      <span className="text-sm">
        This section explores{" "}
        <span className="border-b-2 border-b-blue-400">sleep parameters</span>,
        including sleep efficiency, sleep start time, sleep duration, and wake
        up time. The synthesized data shows the relationship between sleep
        parameters and other lifestyle factors.
      </span>

      <h3 className="text-2xl font-bold">
        Sleep Start Time / Sleep Duration / Wake Up Time
      </h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Sleep Start Time (Sleep Onset): 24-hour</li>
          <li>Wake-up Time: 24-hour</li>
          <li>Sleep Duration: Minute</li>
        </ul>
      </span>

      <PlotColsGroup
        fields={[
          {
            color: "steelblue",
            label: "Sleep Start Time",
            column: "start_hour",
            xlabel: "Sleep onset (hour)",
            ylabel: "Number of records",
          },
          {
            color: "pink",
            label: "Sleep Duration",
            column: "FB_minutesasleep_stages",
            xlabel: "Sleep duration (minutes)",
            ylabel: "Number of records",
          },
          {
            color: "gold",
            label: "Wake-up Time",
            column: "end_hour",
            xlabel: "Wake-up time (hour)",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/fitbit_main_sleep.parquet"
        parquetName="sleep_start_time"
      />

      <h3 className="text-2xl font-bold">
        Caffeine Consumption Time / Sleep Start Time
      </h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Caffeine Consumption: Cups per day</li>
          <li>Sleep Start Time: 24-hour</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Last Caffeine Consumption Time",
            column: "last_coffee_time",
            xlabel: "Last Coffee Time (Hour)",
            ylabel: "Number of records",
          },
          {
            color: "gold",
            label: "Wake-up Time",
            column: "wake_time",
            xlabel: "Wake-up Time (Hour)",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />
    </div>
  );
}
