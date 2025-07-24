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
  ListboxOptions
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon
} from "@heroicons/react/24/solid";
import { useState } from "react";
import NavBarNextPrev from "../components/NavBarNextPrev";
import { useTranslation } from "react-i18next";

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
      <h2 className="text-3xl font-bold">{t("title-daily-hr")}</h2>

      <span className="text-sm">
        {t("shi-intro")}
      </span>
      <div className="bg-yellow-100 border-l-4 border-blue-900 text-blue-900 p-4" role="alert">
        <p className="font-bold">{t("questions")}</p>
          <p>{t("hr-q1")}</p>
          <p>{t("hr-q2")}</p>
          <p>{t("hr-q3")}</p>
      </div>

      <Field>
        <Label>{t("select-datasets")}</Label>
        <Description className={"mb-2 text-xs text-gray-500"}>
          {t("select-datasets-instruction")}
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
        text={t("heart-rate")}
      />
      <NavBarNextPrev index={4} />
    </div>
  );
}
