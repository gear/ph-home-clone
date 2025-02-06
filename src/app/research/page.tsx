import TextFlip from "@/components/FlipText";
import { SectionTitle } from "@/components/SectionTitle";
import { translations } from "@/components/Dictionary";
import haFlipImg from "@/public/img/ha-flip.png"
import sleepFlipImg from "@/public/img/sleep-flip.png"
import metaboFlipImg from "@/public/img/metabo-flip.png"
import mlFlipImg from "@/public/img/ml-flip.png"
import FlipCard from "@/components/FlipCard";

const text = translations.en;

export default function ResearchPage() {
  return (
    <div className="grid grid-cols-1 content-center text-center">
      <SectionTitle
        preTitle={text.rp_vision_pretitle}
        title={text.rp_vision_title}
      >
        {text.rp_vision_desc}
      </SectionTitle>
      <div className="text-justify">
      <TextFlip />
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
          textcolor="text-black"
          title="Metabolic Syndromes"
        />
        <FlipCard
          description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
          image={mlFlipImg}
          rotate="y"
          subtitle="Stuffs"
          textcolor="text-black"
          title="Machine Learning"
        />
      </div>
    </div>
  )
}