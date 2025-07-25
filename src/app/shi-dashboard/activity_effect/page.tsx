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
  const {t} = useTranslation("common");

  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">

      <h1 className="text-5xl font-bold text-gray-400">{t("shi-25-title")}</h1>
      <h2 className="text-3xl font-bold">{t("title-activity")}</h2>

      <span className="text-sm">
        {t("activity-intro")}
      </span>
      <div className="bg-yellow-100 border-l-4 border-blue-900 text-blue-900 p-4" role="alert">
        <p className="font-bold">{t("questions")}</p>
          <p>{t("as-q1")}</p>
          <p>{t("as-q2")}</p>
      </div>


      <h3 className="text-2xl font-bold">Steps per Day / Sleep Efficiency</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Steps per Day: Daily step count</li>
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
            ylabel: t("num-records"),
          },
          {
            color: "teal",
            label: "Sleep Efficiency",
            column: "Sleep_efficiency",
            xlabel: "Sleep Efficiency (%)",
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/activity_sleep.parquet"
        parquetName="activity"
      />

      <h3 className="text-2xl font-bold">Steps per Day / Total Sleep Time</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Steps per Day: Daily step count</li>
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
            ylabel: t("num-records"),
          },
          {
            color: "darkblue",
            label: "Total Sleep Time (in hour)",
            column: "Sleep_duration_h",
            xlabel: "Total Sleep Time",
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/activity_sleep.parquet"
        parquetName="activity"
      />

      <NavBarNextPrev index={4} />
    </div>
  );
}
