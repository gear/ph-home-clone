"use client";

import PlotColsGroup from "@/components/PlotColsGroup";

export default function Distribution() {
  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">
      <h1 className="text-5xl font-bold">SHI Summer School July 2025</h1>

      <h2 className="text-3xl font-bold">Daily Heart Rate Patterns</h2>

      <span className="text-sm">
        There are
        <span className="border-b-2 border-b-blue-400">
          {" "}
          15 interactive graphs
        </span>
        , showing the relationship between sleep and other lifestyle aspects.
        These data is synthesized by sampling from a real data distribution,
        which consists of 16290 person-days of minute-by-minute recordings.
      </span>

      <PlotColsGroup
        fields={[
          {
            color: "steelblue",
            label: "Sleep Onset Time",
            column: "start_hour",
            xlabel: "Sleep onset (hour)",
            ylabel: "Number of observations",
          },
          {
            color: "#8B4513",
            label: "Wake-up Time",
            column: "end_hour",
            xlabel: "Wake-up time (hour)",
            ylabel: "Number of observations",
          },
          {
            color: "green",
            label: "Sleep Duration",
            column: "FB_minutesasleep_stages",
            xlabel: "Sleep duration (minutes)",
            ylabel: "Number of observations",
          },
        ]}
        filePath="/data/fitbit_main_sleep.parquet"
        parquetName="sleep_start_time"
      />
    </div>
  );
}
