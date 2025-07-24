"use client";

import PlotColsGroup from "@/components/PlotColsGroup";
import NavBarNextPrev from "../components/NavBarNextPrev";
import { useTranslation } from "react-i18next";

export default function SHIDashboard() {
  const {t} = useTranslation("common");
  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">

      <h1 className="text-5xl font-bold text-gray-400">{t("shi-25-title")}</h1>
      <h2 className="text-3xl font-bold">{t("title-sleep-params")}</h2>

      <span className="text-sm">
        {t("sleep-params-intro")}
      </span>
      <div className="bg-yellow-100 border-l-4 border-blue-900 text-blue-900 p-4" role="alert">
        <p className="font-bold">{t("questions")}</p>
          <p>{t("sp-q1")}</p>
          <p>{t("sp-q2")}</p>
          <p>{t("sp-q3")}</p>
          <p>{t("sp-q4")}</p>
      </div>
      <h3 className="text-2xl font-bold">{t("sleep-start-time-wake")}</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>Sleep Start Time: 24-hour</li>
          <li>Wake-up Time: 24-hour</li>
          <li>Total Sleep Time: Hour</li>
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
            color: "pink",
            label: "Total Sleep Time",
            column: "sleep_time",
            xlabel: "Total Sleep Time (hour)",
            ylabel: "Number of observations",
          },
          {
            color: "gold",
            label: "Wake-up Time",
            column: "wake_time",
            xlabel: "Wake-up time (hour)",
            ylabel: "Number of observations",
          },
        ]}
        filePath="/data/sleep_arch.parquet"
        parquetName="sleep_arch"
      />
     
      <NavBarNextPrev index={2} />
    </div>
  );
}
