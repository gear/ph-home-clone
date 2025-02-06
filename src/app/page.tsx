"use client";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Topics } from "@/components/ResearchTopics";
import { Video } from "@/components/Video";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { useTranslation } from "react-i18next";
import {
  ChartPieIcon,
  BeakerIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CircleStackIcon,
  CalendarDateRangeIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const { t } = useTranslation("common");

  const healthyAgingResearch = {
    title: t("healthy_aging_research_title"),
    desc: t("har_desc"),
    image: "/img/healthy-ageing.svg",
    bullets: [
      {
        title: t("har_hai_title"),
        desc: t("har_hai_desc"),
        icon: <ChartPieIcon />,
        href: "/research/healthy-aging#hai",
      },
      {
        title: t("har_omics_title"),
        desc: t("har_omics_desc"),
        icon: <BeakerIcon />,
        href: "/research/healthy-aging#omics",
      },
      {
        title: t("har_dev_title"),
        desc: t("har_dev_desc"),
        icon: <SunIcon />,
        href: "/research/healthy-aging#lifestyles",
      },
      {
        title: t("har_data_title"),
        desc: t("har_data_desc"),
        icon: <CircleStackIcon />,
        href: "/research/healthy-aging#datasets",
      },
    ],
  };

  const sleepResearch = {
    title: t("sleep_research_title"),
    desc: t("sleep_desc"),
    image: "/img/sleep.svg",
    bullets: [
      {
        title: t("sleep_lifestyle_title"),
        desc: t("sleep_lifestyle_desc"),
        icon: <AdjustmentsHorizontalIcon />,
        href: "/research/sleep#lifestyles",
      },
      {
        title: t("sleep_datasets_title"),
        desc: t("sleep_datasets_desc"),
        icon: <CalendarDateRangeIcon />,
        href: "/research/sleep#datasets",
      },
      {
        title: t("sleep_app_title"),
        desc: t("sleep_app_desc"),
        icon: <DevicePhoneMobileIcon />,
        href: "/research/sleep#mirasleep",
      },
    ],
  };

  return (
    <Container>
      <Hero />
      <SectionTitle preTitle={t("highlights")} title={t("goal")}>
        <div className="leading-relaxed text-pretty text-justify flex gap-5 flex-col">
          <span>{t("department_p1")}</span>
          <span>{t("department_p2")}</span>
        </div>
      </SectionTitle>

      <Topics data={healthyAgingResearch} />
      <Topics imgPos="right" data={sleepResearch} />

      <SectionTitle
        preTitle={t("social_implementation")}
        title={t("sleep_app_title")}
      >
        {t("mira_sleep_demo")}
      </SectionTitle>

      <Video videoId="9PCDPzs234E" />

      <SectionTitle preTitle="FAQ" title={t("faq")}></SectionTitle>

      <Faq />
    </Container>
  );
}
