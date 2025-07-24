"use client";

import { useState } from "react";
import NavBarNextPrev from "../components/NavBarNextPrev";
import { useTranslation } from "react-i18next";
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
  const {t} = useTranslation("common");

  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">

      <h1 className="text-5xl font-bold text-gray-400">{t("shi-25-title")}</h1>
      <h2 className="text-3xl font-bold">{t("title-caffeine")}</h2>

      <span className="text-sm">
        {t("caffeine-intro")}
      </span>
      <div className="bg-yellow-100 border-l-4 border-blue-900 text-blue-900 p-4" role="alert">
        <p className="font-bold">{t("questions")}</p>
          <p>{t("ce-q1")}</p>
          <p>{t("ce-q2")}</p>
          <p>{t("ce-q3")}</p>
          <p>{t("ce-q4")}</p>
      </div>

      <h3 className="text-2xl font-bold">Time of Last Caffeine Consumption (hour of day) / Total Sleep Time (in hours)</h3>
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
            label: "Time of Last Caffeine Consumption (hour of day)",
            column: "last_coffee_time",
            xlabel: "Time of Last Caffeine Consumption (hour of day)",
            ylabel: "Number of observations",
          },
          {
            color: "steelblue",
            label: "Total Sleep Time",
            column: "sleep_time",
            xlabel: "Total Sleep Time (Hour)",
            ylabel: "Number of observations",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />



      <h3 className="text-2xl font-bold">Time of Last Caffeine Consumption (hour of day) / Light Sleep Time (in hours)</h3>
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
            label: "Time of Last Caffeine Consumption (hour of day)",
            column: "last_coffee_time",
            xlabel: "Time of Last Caffeine Consumption (hour of day)",
            ylabel: "Number of observations",
          },
          {
            color: "aqua",
            label: "Total Light Sleep Time",
            column: "light",
            xlabel: "Total Light Sleep Time",
            ylabel: "Number of observations",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />




      <h3 className="text-2xl font-bold">Time of Last Caffeine Consumption (hour of day) / Total REM Sleep Time (in hours)</h3>
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
            label: "Time of Last Caffeine Consumption (hour of day)",
            column: "last_coffee_time",
            xlabel: "Time of Last Caffeine Consumption (hour of day)",
            ylabel: "Number of observations",
          },
          {
            color: "steelblue",
            label: "Total REM Sleep Time",
            column: "rem",
            xlabel: "Total REM Sleep Time",
            ylabel: "Number of observations",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">Time of Last Caffeine Consumption (hour of day) / Total Deep Sleep Time (in hours)</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Time of Last Caffeine Consumption (hour of day): 24-hour Format</li>
          <li>Deep Time: Hour</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Time of Last Caffeine Consumption (hour of day)",
            column: "last_coffee_time",
            xlabel: "Time of Last Caffeine Consumption (hour of day)",
            ylabel: "Number of observations",
          },
          {
            color: "darkblue",
            label: "Total Deep Sleep Time",
            column: "deep",
            xlabel: "Total Deep Sleep Time",
            ylabel: "Number of observations",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">Time of Last Caffeine Consumption (hour of day) / Total Wake During Sleep Time (in hours)</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Time of Last Caffeine Consumption (hour of day): 24-hour Format</li>
          <li>Total Wake During Sleep Deep Time: Hour</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Time of Last Caffeine Consumption (hour of day)",
            column: "last_coffee_time",
            xlabel: "Time of Last Caffeine Consumption (hour of day)",
            ylabel: "Number of observations",
          },
          {
            color: "darkgoldenrod",
            label: "Total Wake During Sleep Time (in hours)",
            column: "wake",
            xlabel: "Total Wake During Sleep Time",
            ylabel: "Number of observations",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">Time of Last Caffeine Consumption (hour of day) / Sleep Efficiency</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Time of Last Caffeine Consumption (hour of day): 24-hour Format</li>
          <li>Sleep Efficiency: Percentage</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: "Time of Last Caffeine Consumption (hour of day)",
            column: "last_coffee_time",
            xlabel: "Time of Last Caffeine Consumption (hour of day)",
            ylabel: "Number of observations",
          },
          {
            color: "teal",
            label: "Sleep Efficiency",
            column: "sleep_efficiency",
            xlabel: "Sleep Efficiency (%)",
            ylabel: "Number of observations",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">Time of Last Caffeine Consumption (hour of day) / Sleep Start Time / Wake Up Time</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Sleep Start Time: 24-hour</li>
          <li>Wake Up Time: 24-hour</li>
          <li>Time of Last Caffeine Consumption (hour of day): 24-hour</li>
        </ul>
      </span>

      <PlotColsGroup
        fields={[
          {
            color: "steelblue",
            label: "Sleep Start Time",
            column: "bedtime",
            xlabel: "Sleep Start Time (hour)",
            ylabel: "Number of observations",
          },
          {
            color: "black",
            label: "Time of Last Caffeine Consumption (hour of day)",
            column: "last_coffee_time",
            xlabel: "Time of Last Caffeine Consumption (hour of day)",
            ylabel: "Number of observations",
          },
          {
            color: "gold",
            label: t("num-records"),
            column: "wake_time_corrected",
            xlabel: "Wake-up Time (hour)",
            ylabel: "Number of observations",
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />

      <NavBarNextPrev index={3} />
    </div>
  );
}
