"use client";

import { useState } from "react";
import NavBarNextPrev from "../components/NavBarNextPrev";
import { useTranslation } from "react-i18next";
import PlotColsGroup from "@/components/PlotColsGroup";

export default function SHIDashboard() {
  const {t} = useTranslation("common");

  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">

      <h1 className="text-5xl font-bold text-gray-400"><a href="/shi-dashboard">{t("shi-25-title")}</a></h1>
      <h2 className="text-3xl font-bold">{t("title-screen")}</h2>

      <span className="text-sm">
        {t("screen-intro")}
      </span>
      <div className="bg-yellow-100 border-l-4 border-blue-900 text-blue-900 p-4" role="alert">
        <p className="font-bold">{t("questions")}</p>
          <p>{t("ss-q1")}</p>
          <p>{t("ss-q2")}</p>
      </div>


      <h3 className="text-2xl font-bold">{t("se-t")} / {t("ce-t2")}</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>{t("se-l")}</li>
          <li>{t("ce-l12")}</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "deepskyblue",
            label: t("se-t"),
            column: "Screen_time_h",
            xlabel: t("ce-l"),
            ylabel: t("num-records"),
          },
          {
            color: "darkblue",
            label: t("ce-t2"),
            column: "Sleep_duration_h",
            xlabel: t("ce-l12"),
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/activity_sleep.parquet"
        parquetName="activity"
      />


      <h3 className="text-2xl font-bold">{t("se-t")} / {t("ce-t5")}</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>{t("se-l")}</li>
          <li>{t("ce-l-se")}</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "deepskyblue",
            label: t("se-t"),
            column: "Screen_time_h",
            xlabel: t("ce-l-se"),
            ylabel: t("num-records"),
          },
          {
            color: "teal",
            label: t("ce-t5"),
            column: "Sleep_efficiency",
            xlabel: t("ce-l-se"),
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/activity_sleep.parquet"
        parquetName="activity"
      />


      <NavBarNextPrev index={5} />
    </div>
  );
}
