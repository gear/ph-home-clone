import TextFlip from "@/components/FlipText";
import { SectionTitle } from "@/components/SectionTitle";
import { translations } from "@/components/Dictionary";

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
    </div>
  )
}