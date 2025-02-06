import {
  ChartPieIcon,
  BeakerIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CircleStackIcon,
  CalendarDateRangeIcon
} from "@heroicons/react/24/solid";
import i18next from "i18next";

const healthyAgingResearch = {
  title: i18next.t("healthy_aging_research_title"),
  desc: i18next.t("har_desc"),
  image: '/img/healthy-ageing.svg',
  bullets: [
    {
      title: i18next.t("har_hai_title"),
      desc: i18next.t("har_hai_desc"),
      icon: <ChartPieIcon />,
      href: "/research/healthy-aging#hai"
    },
    {
      title: i18next.t("har_omics_title"),
      desc: i18next.t("har_omics_desc"),
      icon: <BeakerIcon />,
      href: "/research/healthy-aging#omics"
    },
    {
      title: i18next.t("har_dev_title"),
      desc: i18next.t("har_dev_desc"),
      icon: <SunIcon />,
      href: "/research/healthy-aging#lifestyles"
    },
    {
      title: i18next.t("har_data_title"),
      desc: i18next.t("har_data_desc"),
      icon: <CircleStackIcon />,
      href: "/research/healthy-aging#datasets"
    },
  ],
};

const sleepResearch = {
  title: i18next.t("sleep_research_title"),
  desc: i18next.t("sleep_desc"),
  image: '/img/sleep.svg',
  bullets: [
    {
      title: i18next.t("sleep_lifestyle_title"),
      desc: i18next.t("sleep_lifestyle_desc"),
      icon: <AdjustmentsHorizontalIcon />,
      href: "/research/sleep#lifestyles"
    },
    {
      title: i18next.t("sleep_datasets_title"),
      desc: i18next.t("sleep_datasets_desc"),
      icon: <CalendarDateRangeIcon />,
      href: "/research/sleep#datasets"
    },
    {
      title: i18next.t("sleep_app_title"),
      desc: i18next.t("sleep_app_desc"),
      icon: <DevicePhoneMobileIcon />,
      href: "/research/sleep#mirasleep"
    }
  ],
};

const metabolicSyndromes = {
  title: i18next.t("metabo_title"),
  desc: i18next.t("metabo_desc"),
  image: '/img/sleep.svg',
  bullets: [
    {
      title: i18next.t("metabo_mobile_title"),
      desc: i18next.t("metabo_mobile_desc"),
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: i18next.t("metabo_tech_title"),
      desc: i18next.t("metabo_tech_desc"),
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: i18next.t("metabo_mode_title"),
      desc: i18next.t("metabo_mode_desc"),
      icon: <SunIcon />,
    },
  ],
};

export { healthyAgingResearch, sleepResearch, metabolicSyndromes };
