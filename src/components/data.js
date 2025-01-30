import {
  ChartPieIcon,
  BeakerIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CircleStackIcon
} from "@heroicons/react/24/solid";
import { translations } from "./Dictionary";
import healthyAgingImg from "@/public/img/healthy-ageing.svg";
import sleepImg from "@/public/img/sleep.svg";


const text = translations.en;

const healthyAgingResearch = {
  title: text.healthy_aging_research_title,
  desc: text.har_desc,
  image: healthyAgingImg,
  bullets: [
    {
      title: text.har_hai_title,
      desc: text.har_hai_desc,
      icon: <ChartPieIcon />,
      href: "/research/healthy-aging#hai"
    },
    {
      title: text.har_omics_title,
      desc: text.har_omics_desc,
      icon: <BeakerIcon />,
      href: "/research/healthy-aging#omics"
    },
    {
      title: text.har_dev_title,
      desc: text.har_dev_desc,
      icon: <SunIcon />,
      href: "/research/healthy-aging#lifestyles"
    },
    {
      title: text.har_data_title,
      desc: text.har_data_desc,
      icon: <CircleStackIcon />,
      href: "/research/healthy-aging#datasets"
    },
  ],
};

const sleepResearch = {
  title: text.sleep_research_title,
  desc: text.sleep_desc,
  image: sleepImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const metabolicSyndromes = {
  title: "",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: sleepImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export {healthyAgingResearch, sleepResearch, metabolicSyndromes};
