import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Topics } from "@/components/ResearchTopics";
import { Video } from "@/components/Video";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { healthyAgingResearch, sleepResearch, metabolicSyndromes } from "@/components/data";
import { translations } from "@/components/Dictionary";


const text = translations.en;

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle={text.highlights}
        title={text.goal}
      >
        <div className="leading-relaxed text-justify flex gap-5 flex-col">
          <span> {text.department_p1}</span>
          <span> {text.department_p2}</span>
        </div>
      </SectionTitle>

      <Topics data={healthyAgingResearch} />
      <Topics imgPos="right" data={sleepResearch} />

      <SectionTitle
        preTitle={text.social_implementation}
        title={text.sleep_app_title}
      >
        {text.mira_sleep_demo}
      </SectionTitle>

      <Video videoId="9PCDPzs234E" />

      <SectionTitle preTitle="FAQ" title={text.faq}>
      </SectionTitle>

      <Faq />
    </Container>
  );
}
