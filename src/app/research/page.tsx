'use client';

import TextFlip from "@/components/FlipText";
import { SectionTitle } from "@/components/SectionTitle";
import haFlipImg from "@/public/img/ha-flip.png"
import sleepFlipImg from "@/public/img/sleep-flip.png"
import metaboFlipImg from "@/public/img/metabo-flip.png"
import mlFlipImg from "@/public/img/ml-flip.png"
import FlipCard from "@/components/FlipCard";
import { useTranslation } from "react-i18next";

export default function ResearchPage() {
  const { t } = useTranslation("common");
  return (
    <div className="grid grid-cols-1 content-center text-center">
      <SectionTitle
        preTitle={t("rp_vision_pretitle")}
        title={t("rp_vision_title")}
      >
        {t("rp_vision_desc")}
      </SectionTitle>
      <div className="text-justify">
        <TextFlip
        words={[
          t("rp_title_flip_1"),
          t("rp_title_flip_2"),
          t("rp_title_flip_3"),
          t("rp_title_flip_4"),
          t("rp_title_flip_1"),
        ]}
        fixedWord={t("rp_title_flip_fixed")}
        />
      </div>
      <div className="flex gap-[30px] justify-center flex-row mt-10">
        <FlipCard
          description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
          image={haFlipImg}
          rotate="y"
          subtitle="Healthy Aging"
          textcolor="text-black"
          title="Healthy Aging"
        />
        <FlipCard
          description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
          image={sleepFlipImg}
          rotate="y"
          subtitle="Sleep"
          textcolor="text-black"
          title="Sleep Physiology"
        />
        <FlipCard
          description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
          image={metaboFlipImg}
          rotate="y"
          subtitle="Metabolic Syndromes"
          textcolor="text-white"
          title="Metabolic Syndromes"
        />
        <FlipCard
          description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
          image={mlFlipImg}
          rotate="y"
          subtitle="Stuffs"
          textcolor="text-white"
          title="Machine Learning"
        />
      </div>
      <SectionTitle
        preTitle={t("privacy_policy_pretitle")}
        title={t("privacy_policy_title")}
      >
        {t("privacy_policy")}
      </SectionTitle>
    </div>
  );
}
