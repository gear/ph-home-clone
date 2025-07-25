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
          <li>{t("sp-l1")}</li>
          <li>{t("sp-l2")}</li>
          <li>{t("sp-l3")}</li>
        </ul>
      </span>

      <PlotColsGroup
        fields={[
          {
            color: "steelblue",
            label: t("sp-stt"),
            column: "bedtime",
            xlabel: t("sp-l1"),
            ylabel: t("num-records"),
          },
          {
            color: "pink",
            label: t("sp-tst"),
            column: "sleep_time",
            xlabel: t("sp-l3"),
            ylabel: t("num-records"),
          },
          {
            color: "gold",
            label: t("sp-wut"),
            column: "wake_time",
            xlabel: t("sp-l2"),
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/sleep_arch.parquet"
        parquetName="sleep_arch"
      />
     
      <NavBarNextPrev index={2} />
    </div>
  );
}
