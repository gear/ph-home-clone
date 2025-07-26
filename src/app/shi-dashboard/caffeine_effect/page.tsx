"use client";

import NavBarNextPrev from "../components/NavBarNextPrev";
import { useTranslation } from "react-i18next";
import PlotColsGroup from "@/components/PlotColsGroup";


export default function SHIDashboard() {
  const {t} = useTranslation("common");

  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">

      <h1 className="text-5xl font-bold text-gray-400"><a href="/shi-dashboard">{t("shi-25-title")}</a></h1>
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

      <h3 className="text-2xl font-bold">{t("ce-t1")} / {t("ce-t2")}</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>{t("ce-l11")}</li>
          <li>{t("ce-l12")}</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: t("ce-t1"),
            column: "last_coffee_time_corrected",
            xlabel: t("ce-l11"),
            ylabel: t("num-records"),
          },
          {
            color: "steelblue",
            label: t("ce-t2"),
            column: "sleep_time",
            xlabel: t("ce-l12"),
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">{t("ce-t1")} / {t("ce-t3")}</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>{t("ce-l11")}</li>
          <li>{t("ce-l21")}</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: t("ce-t1"),
            column: "last_coffee_time_corrected",
            xlabel: t("ce-l11"),
            ylabel: t("num-records"),
          },
          {
            color: "aqua",
            label: t("ce-t3"),
            column: "light",
            xlabel: t("ce-l21"),
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">{t("ce-t1")} / {t("ce-t4")}</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>{t("ce-l11")}</li>
          <li>{t("ce-l-r")}</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: t("ce-t1"),
            column: "last_coffee_time_corrected",
            xlabel: t("ce-l11"),
            ylabel: t("num-records"),
          },
          {
            color: "steelblue",
            label: t("ce-t4"),
            column: "rem",
            xlabel: t("ce-l-r"),
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">{t("ce-t1")} / {t("ce-t7")}</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>{t("ce-l11")}</li>
          <li>{t("ce-l-d")}</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: t("ce-t1"),
            column: "last_coffee_time_corrected",
            xlabel: t("ce-l11"),
            ylabel: t("num-records"),
          },
          {
            color: "darkblue",
            label: t("ce-t7"),
            column: "deep",
            xlabel: t("ce-l-d"),
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">{t("ce-t1")} / {t("ce-t6")}</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>{t("ce-l11")}</li>
          <li>{t("ce-l-tw")}</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: t("ce-t1"),
            column: "last_coffee_time_corrected",
            xlabel: t("ce-l11"),
            ylabel: t("num-records"),
          },
          {
            color: "darkgoldenrod",
            label: t("ce-t6"),
            column: "wake",
            xlabel: t("ce-l-tw"),
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">{t("ce-t1")} / {t("ce-t5")}</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>{t("ce-l11")}</li>
          <li>{t("ce-l-se")}</li>
        </ul>
      </span>
      <PlotColsGroup
        fields={[
          {
            color: "black",
            label: t("ce-t1"),
            column: "last_coffee_time_corrected",
            xlabel: t("ce-l11"),
            ylabel: t("num-records"),
          },
          {
            color: "teal",
            label: t("ce-t5"),
            column: "sleep_efficiency",
            xlabel: t("ce-l-se"),
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />


      <h3 className="text-2xl font-bold">{t("ce-t1")} / {t("sp-stt")} / {t("sp-wut")}</h3>
      <span className="text-sm">
        <ul className="list-disc ml-5">
          <li>{t("sp-l1")}</li>
          <li>{t("sp-l2")}</li>
          <li>{t("ce-l11")}</li>
        </ul>
      </span>

      <PlotColsGroup
        fields={[
          {
            color: "steelblue",
            label: t("sp-stt"),
            column: "bedtime_corrected",
            xlabel: t("sp-l1"),
            ylabel: t("num-records"),
          },
          {
            color: "black",
            label: t("ce-t1"),
            column: "last_coffee_time_corrected",
            xlabel: t("ce-l11"),
            ylabel: t("num-records"),
          },
          {
            color: "gold",
            label: t("sp-wut"),
            column: "wake_time_corrected",
            xlabel: t("sp-l2"),
            ylabel: t("num-records"),
          },
        ]}
        filePath="/data/shi_caffeine.parquet"
        parquetName="caffeine_consumption"
      />

      <NavBarNextPrev index={3} />
    </div>
  );
}
