"use client";

import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("common");
  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">
      <h1 className="text-5xl font-bold text-gray-400">{t("shi-25-title")}</h1>

      {/*
      ***************************
      ***************************
      Caffeine Consumption Effect
      ***************************
      ***************************
      */}

      <h2 className="text-3xl font-bold mt-8">2. Caffeine Consumption Effect</h2>


      <h3 className="text-2xl font-bold">Last Caffeine Time / Total Sleep Time (in hours)</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Time of Last Caffeine: 24-hour Format</li>
          <li>Sleep Time: Hour</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Time of Last Caffeine (hour)",
            column: "last_coffee_time",
            xlabel: "Time of Last Caffeine (hour)",
            ylabel: "Number of records",
          },
          {
            color: "steelblue",
            label: "Total Sleep Time",
            column: "sleep_time",
            xlabel: "Total Sleep Time (Hour)",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />



      <h3 className="text-2xl font-bold">Last Caffeine Time / Light Sleep Time (in hours)</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Time of Last Caffeine: 24-hour Format</li>
          <li>Total Light Sleep Time: Hour</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Time of Last Caffeine (hour)",
            column: "last_coffee_time",
            xlabel: "Time of Last Caffeine (hour)",
            ylabel: "Number of records",
          },
          {
            color: "aqua",
            label: "Total Light Sleep Time",
            column: "light",
            xlabel: "Total Light Sleep Time",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />




      <h3 className="text-2xl font-bold">Last Caffeine Time / Total REM Sleep Time (in hours)</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Time of Last Caffeine: 24-hour Format</li>
          <li>REM Time: Hour</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Time of Last Caffeine (hour)",
            column: "last_coffee_time",
            xlabel: "Time of Last Caffeine (hour)",
            ylabel: "Number of records",
          },
          {
            color: "steelblue",
            label: "Total REM Sleep Time",
            column: "rem",
            xlabel: "Total REM Sleep Time",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">Last Caffeine Time / Total Deep Sleep Time (in hours)</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Last Caffeine Time: 24-hour Format</li>
          <li>Deep Time: Hour</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Last Caffeine Consumption Time",
            column: "last_coffee_time",
            xlabel: "Last Caffeine Time (Hour)",
            ylabel: "Number of records",
          },
          {
            color: "darkblue",
            label: "Total Deep Sleep Time",
            column: "deep",
            xlabel: "Total Deep Sleep Time",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">Last Caffeine Time / Total Wake During Sleep Time (in hours)</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Last Caffeine Time: 24-hour Format</li>
          <li>Total Wake During Sleep Deep Time: Hour</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Last Caffeine Consumption Time",
            column: "last_coffee_time",
            xlabel: "Last Caffeine Time (Hour)",
            ylabel: "Number of records",
          },
          {
            color: "darkgoldenrod",
            label: "Total Wake During Sleep Time (in hours)",
            column: "wake",
            xlabel: "Total Wake During Sleep Time",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">Last Caffeine Time / Sleep Efficiency</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Last Caffeine Time: 24-hour Format</li>
          <li>Sleep Efficiency: Percentage</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Last Caffeine Consumption Time",
            column: "last_coffee_time",
            xlabel: "Last Caffeine Time (Hour)",
            ylabel: "Number of records",
          },
          {
            color: "teal",
            label: "Sleep Efficiency",
            column: "sleep_efficiency",
            xlabel: "Sleep Efficiency (%)",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">Last Caffeine Time / Sleep Start Time / Wake Up Time</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Sleep Start Time: 24-hour</li>
          <li>Wake Up Time: 24-hour</li>
          <li>Last Caffeine Time: 24-hour</li>
        </ul>
      </span>

      <PlotColsGroup
        fields={[
          {
            color: "steelblue",
            label: "Sleep Start Time",
            column: "bedtime",
            xlabel: "Sleep Start Time (hour)",
            ylabel: "Number of records",
          },
          {
            color: "black",
            label: "Last Caffeine Time",
            column: "last_coffee_time",
            xlabel: "Last Caffeine Time (hour)",
            ylabel: "Number of records",
          },
          {
            color: "gold",
            label: "Wake-up Time",
            column: "wake_time_corrected",
            xlabel: "Wake-up Time (hour)",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


    
      {/*
      ***************************
      ***************************
      Activity Effect: Steps, BMI, Screen Time
      ***************************
      ***************************
      */}

      <h2 className="text-3xl font-bold mt-8">3. Activity Effect</h2>
      


      <h3 className="text-2xl font-bold">Steps per Day / Sleep Efficiency</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Steps per Day: Steps count per day</li>
          <li>Sleep Efficiency: Percentage</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "lightslategrey",
            label: "Steps per Day",
            column: "Steps_per_day",
            xlabel: "Steps per Day (Count)",
            ylabel: "Number of records",
          },
          {
            color: "teal",
            label: "Sleep Efficiency",
            column: "Sleep_efficiency",
            xlabel: "Sleep Efficiency (%)",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/activity_sleep.parquet"
        parquetName="activity"
      />

      <h3 className="text-2xl font-bold">Steps per Day / Total Sleep Time</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Steps per Day: Steps count per day</li>
          <li>Total Sleep Time: Hours</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "lightslategrey",
            label: "Steps per Day",
            column: "Steps_per_day",
            xlabel: "Steps per Day (count)",
            ylabel: "Number of records",
          },
          {
            color: "darkblue",
            label: "Total Sleep Time (in hour)",
            column: "Sleep_duration_h",
            xlabel: "Total Sleep Time",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/activity_sleep.parquet"
        parquetName="activity"
      />


      {/*
      <h3 className="text-2xl font-bold">Body Mass Index / Sleep Efficiency (ranges 0 to 1)</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Body Mass Index (BMI): kg/m2</li>
          <li>Sleep Efficiency: Fraction from 0 to 1</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "lightcoral",
            label: "BMI",
            column: "BMI",
            xlabel: "BMI (kg/m2)",
            ylabel: "Number of records",
          },
          {
            color: "teal",
            label: "Sleep Efficiency (in fraction)",
            column: "Sleep_efficiency",
            xlabel: "Sleep Efficiency",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/activity_sleep.parquet"
        parquetName="activity"
      />

      <h3 className="text-2xl font-bold">Body Mass Index / Total Sleep Time</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Body Mass Index (BMI): kg/m2</li>
          <li>Total Sleep Time: Hours</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "lightcoral",
            label: "BMI",
            column: "BMI",
            xlabel: "BMI (kg/m2)",
            ylabel: "Number of records",
          },
          {
            color: "darkblue",
            label: "Total Sleep Time (in hour)",
            column: "Sleep_duration_h",
            xlabel: "Total Sleep Time",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/activity_sleep.parquet"
        parquetName="activity"
      />
      */}

      {/*
      ***************************
      ***************************
      Screen Effect: Steps, BMI, Screen Time
      ***************************
      ***************************
      */}

      <h2 className="text-3xl font-bold mt-8">4. Screen Time Effect</h2>
      

      <h3 className="text-2xl font-bold">Screen Time / Sleep Efficiency (ranges 0 to 1)</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Screen Time: Hour</li>
          <li>Sleep Efficiency: Percentage</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "deepskyblue",
            label: "Screen Time",
            column: "Screen_time_h",
            xlabel: "Screen Time (in hour)",
            ylabel: "Number of records",
          },
          {
            color: "teal",
            label: "Sleep Efficiency",
            column: "Sleep_efficiency",
            xlabel: "Sleep Efficiency (%)",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/activity_sleep.parquet"
        parquetName="activity"
      />



      <h3 className="text-2xl font-bold">Screen Time / Total Sleep Time</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Screen Time: Hour</li>
          <li>Total Sleep TIme: Hour</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "deepskyblue",
            label: "Screen Time",
            column: "Screen_time_h",
            xlabel: "Screen Time (in hour)",
            ylabel: "Number of records",
          },
          {
            color: "darkblue",
            label: "Total Sleep Time (in hour)",
            column: "Sleep_duration_h",
            xlabel: "Total Sleep Time",
            ylabel: "Number of records",
          },
        ]}
        filePath="/data/activity_sleep.parquet"
        parquetName="activity"
      />

      {/*
      ***************************
      ***************************
      Weekend / Weekday Effect
      ***************************
      ***************************

      <h2 className="text-3xl font-bold mt-8">4. Weekend/Weekday Effect</h2>

      */}


    </div>
  );
}
