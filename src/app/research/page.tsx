import TextFlip from "@/components/FlipText";
import { SectionTitle } from "@/components/SectionTitle";
import { translations } from "@/components/Dictionary";
import IL11 from "@/public/img/il11.png"
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
      <div>
        <FlipCard
          description="Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks."
          image={IL11}
          rotate="y"
          subtitle="Stuffs"
          title="Healthy Aging"
        />
      </div>
    </div>
  )
}