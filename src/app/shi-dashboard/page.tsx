"use client";

import HeartBeatRateChart from "@/app/shi-dashboard/components/HeartBeatRateChart";
import { cn } from "@/libs/utils";
import {
  Description,
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PlotColsGroup from "@/components/PlotColsGroup";

const csvPaths = [
  {
    path: "/data/subject_001.csv",
    color: "#60a5fa",
  },
  //{
  //  path: "/data/subject_002.csv",
  //  color: "#facc15",
  //},
  {
    path: "/data/subject_003.csv",
    color: "#facc15",
  },
];

const datasets = csvPaths.map((item, index) => ({
  color: item.color,
  path: item.path,
  id: item.path,
  rawTable: `heart_rate_raw_${index}`,
  endpointTable: `endpoint_${index}`,
  label: `Heart rate ${index + 1}`,
}));

export default function SHIDashboard() {
  const [selectedDataset, setSelectedDataset] = useState([...datasets]);

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

      <Field>
        <Label>Select datasets</Label>
        <Description className={"mb-2 text-xs text-gray-500"}>
          Only datasets with checked data will be shown in the chart.
        </Description>

        <Listbox value={selectedDataset} onChange={setSelectedDataset} multiple>
          <ListboxButton
            className={cn(
              "relative block w-[200px] max-w-[200px] h-[36px] text-ellipsis whitespace-nowrap overflow-hidden rounded-lg bg-gray-200 py-1.5 pr-8 pl-3 text-left text-sm/6",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
            )}
          >
            {selectedDataset.map((person) => person.label).join(", ")}

            <ChevronDownIcon
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions
            anchor="bottom"
            transition
            className={cn(
              "w-[200px] rounded-xl border bg-gray-100 p-1 mt-1 focus:outline-none",
              "transition duration-100 ease-in data-leave:data-closed:opacity-0"
            )}
          >
            {datasets.map((data) => {
              const isSelected = selectedDataset.some(
                (item) => item.id === data.id
              );
              return (
                <ListboxOption
                  className="cursor-pointer group text-sm flex justify-between items-center gap-2 rounded-lg px-3 py-1.5 select-none hover:bg-gray-400"
                  key={data.id}
                  value={data}
                >
                  {data.label}

                  <CheckIcon
                    className={cn("invisible size-4", isSelected && "visible")}
                  />
                </ListboxOption>
              );
            })}
          </ListboxOptions>
        </Listbox>

        <div className="flex gap-3 mt-2 flex-wrap">
          {selectedDataset.map((dataset) => (
            <div className="flex items-center gap-1" key={dataset.id}>
              <span
                key={dataset.id}
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: dataset.color }}
              ></span>
              <span className="text-sm">{dataset.label}</span>
            </div>
          ))}
        </div>
      </Field>

      <HeartBeatRateChart
        key={selectedDataset.map((d) => d.id).join(",")}
        csvPaths={selectedDataset}
        width={1184}
        height={500}
        text="Heart Rate"
      />

      <h2 className="text-3xl font-bold mt-8">Sleep Parameters</h2>

      <span className="text-sm">
        This section explores {" "}
        <span className="border-b-2 border-b-blue-400">
          sleep parameters
        </span>
        , including sleep efficiency, sleep start time, sleep duration, and wake up time.
        The synthesized data shows the relationship between sleep parameters and other lifestyle factors.
      </span>

      <h3 className="text-2xl font-bold">Sleep Start Time / Sleep Duration / Wake Up Time</h3>
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
      />

      <h3 className="text-2xl font-bold">Caffeine Consumption Time / Sleep Start Time</h3>
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
      />

      <h2 className="text-3xl font-bold mt-8">Sleep Architecture: Light/REM/Deep</h2>
      
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
      />

    </div>
  );
}
