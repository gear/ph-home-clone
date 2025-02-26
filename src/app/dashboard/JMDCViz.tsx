"use client";
import { useEffect, useMemo } from "react";
import * as Plot from "@observablehq/plot";
import { DatasetProps } from "@/types/sleep";

/* eslint-disable react/display-name */
export const JMDCViz = ({ ageDistributionRef }: DatasetProps) => {
  const jmdcData = useMemo(
    () => ({
      participants: Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        age: Math.floor(25 + Math.random() * 40), // Random ages between 25-65
      })),
    }),
    []
  );

  useEffect(() => {
    const ageDistributionCurrent = ageDistributionRef.current;
    if (!ageDistributionCurrent) return;

    ageDistributionCurrent.innerHTML = "";

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

    ageDistributionCurrent.appendChild(ageDistPlot);

    return () => {
      if (ageDistributionCurrent) { ageDistributionCurrent.innerHTML = ""; }
    };
  }, [ageDistributionRef]);

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Age Distribution</h3>
      <div ref={ageDistributionRef} />
    </div>
  );
};
