"use client";

import { FILTER_TOPICS, FILTER_YEAR } from "@/constants";
import { SelectOption } from "@/types";
import { useEffect } from "react";
import { usePublicationsContext } from "../../../context/PublicationsContext";
import moment from "moment";
import { useTranslation } from "react-i18next";

const FilterSideBar = () => {
  const { t } = useTranslation("common");
  const { setTopicFilter, setYearFilter, yearFilter, topicFilter } =
    usePublicationsContext();

  useEffect(() => {
    const currentYear = moment().year();
    const yearOptions = Array.from(
      { length: currentYear - FILTER_YEAR + 1 },
      (_, i) => ({
        value: currentYear - i,
        label: (currentYear - i).toString(),
      })
    );
    setYearFilter(yearOptions[0].value);
  }, []);

  useEffect(() => {
    const topicOptions = FILTER_TOPICS.map((topic) => ({
      value: topic,
      label: topic,
    }));
    setTopicFilter(topicOptions[0].value);
  }, []);

  const handleTopicChange = (topic: string) => setTopicFilter(topic);
  const handleYearChange = (year: number) => setYearFilter(year);

  return (
    <div className="min-w-[20vw]">
      <FilterColumn
        title={t("filter_sidebar_topics_label")}
        options={FILTER_TOPICS.map((topic) => ({
          value: topic,
          label: topic,
        }))}
        onChange={(value) => handleTopicChange(value as string)}
        selected={topicFilter}
      />
      <FilterColumn
        title={t("filter_sidebar_years_label")}
        options={Array.from(
          { length: moment().year() - FILTER_YEAR + 1 },
          (_, i) => ({
            value: moment().year() - i,
            label: (moment().year() - i).toString(),
          })
        )}
        onChange={(value) => handleYearChange(value as number)}
        selected={yearFilter}
      />
    </div>
  );
};

interface FilterColumnProps {
  title: string;
  options: SelectOption<string | number>[];
  onChange: (value: string | number) => void;
  selected: string | number;
}
const FilterColumn = ({
  title,
  options,
  onChange,
  selected,
}: FilterColumnProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold mb-4 md:mb-0 md:mr-4">{title}</h2>
      <div className="flex flex-wrap md:flex-col">
        {options.map((option, index) => (
          <div
            key={index}
            className={`text-blue-500 cursor-pointer hover:text-blue-700 ${
              selected === option.value ? "bg-blue-200" : ""
            } m-2`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSideBar;
