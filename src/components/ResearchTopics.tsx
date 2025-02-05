import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

interface TopicsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
      href: string;
    }[];
  };
}
export const Topics = (props: Readonly<TopicsProps>) => {
  const { data } = props;
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 mt-7 ${
          props.imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <div>
          <Image
            src={data.image}
            width={600}
            height={600}
            alt="Topics"
            className={"object-cover"}
          />
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          data.imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
              <a href="/research/healthy-aging">{data.title}</a>
            </h3>

            <div className="max-w-2xl text-pretty hyphens-auto py-5 text-lg text-gray-500 lg:text-xl xl:text-xl">
              <div className="leading-relaxed text-pretty text-justify flex gap-5 flex-col">
                {data.desc}
              </div>
            </div>
          </div>

          <div className="w-full mt-5">
            {data.bullets.map((item, index) => (
              <Topic
                key={index}
                title={item.title}
                icon={item.icon}
                href={item.href}
              >
                {item.desc}
              </Topic>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

function Topic(props: any) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 bg-blue-500 rounded-md w-11 h-11 ">
        <a href={props.href}>
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-blue-50",
          })}
        </a>
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 ">
          <a href={props.href}>{props.title}</a>
        </h4>
        <p className="mt-1 text-gray-500 ">{props.children}</p>
      </div>
    </div>
  );
}
