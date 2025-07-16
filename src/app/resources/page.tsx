'use client';

import TextFlip from "@/components/FlipText";
import { SectionTitle } from "@/components/SectionTitle";
import haFlipImg from "@/public/img/ha-flip.png"
import sleepFlipImg from "@/public/img/sleep-flip.png"
import metaboFlipImg from "@/public/img/metabo-flip.png"
import mlFlipImg from "@/public/img/ml-flip.png"
import FlipCard from "@/components/FlipCard";
import { useTranslation } from "react-i18next";

export default function ResourcesPage() {
  const { t } = useTranslation("common");
  return (
    <div className="grid grid-cols-1 content-center text-center">
      <SectionTitle
        preTitle={t("rp_vision_pretitle")}
        title={t("rp_vision_title")}
      >
        {t("rp_vision_desc")}
      </SectionTitle>

      <SectionTitle
        preTitle={t("privacy_policy_pretitle")}
        title={t("privacy_policy_title")}
      >
        {t("privacy_policy")}
      </SectionTitle>
    </div>
  );
}
