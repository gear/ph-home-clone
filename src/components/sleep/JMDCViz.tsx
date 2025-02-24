"use client";
import { useEffect } from "react";
import * as Plot from "@observablehq/plot";
import { DatasetProps } from "@/types/sleep";
import { jmdcData } from "./data";

export const JMDCViz = ({ ageDistributionRef }: DatasetProps) => {
  useEffect(() => {
    if (!ageDistributionRef.current) return;

    ageDistributionRef.current.innerHTML = "";

    const ageDistPlot = Plot.plot({
      marginLeft: 60,
      height: 300,
      x: { label: "Age (years)", domain: [20, 70] },
      y: { label: "Number of Participants", grid: true },
      marks: [
        Plot.rectY(
          jmdcData.participants,
          Plot.binX(
            { y: "count" },
            {
              x: "age",
              fill: "steelblue",
              title: (d) => `${d.count} participants\nAge: ${Math.floor(d.age)}-${Math.floor(d.age + 5)}`,
              thresholds: 20,
            }
          )
        ),
        Plot.ruleY([0])
      ]
    });

    ageDistributionRef.current.appendChild(ageDistPlot);

    return () => {
      if (ageDistributionRef.current) ageDistributionRef.current.innerHTML = "";
    };
  }, [ageDistributionRef]);

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Age Distribution</h3>
      <div ref={ageDistributionRef} />
    </div>
  );
};
