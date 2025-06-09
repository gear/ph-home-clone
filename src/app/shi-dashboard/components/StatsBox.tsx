import { cn } from "@/libs/utils";
import React from "react";

interface PropsType {
  label: string;
  rate: string;
  rows: {
    label: string;
    rate: string;
  }[];
  color: "blue" | "yellow";
}

const StatsBox: React.FC<PropsType> = ({ label, rate, rows, color }) => {
  return (
    <div className="bg-slate-100 rounded-md p-6 w-full grow flex flex-col">
      <h2
        className={cn("text-start mb-2", {
          "text-yellow-400": color === "yellow",
          "text-blue-400": color === "blue",
        })}
      >
        {label}
      </h2>

      <div className="text-2xl font-bold mb-4">{rate}</div>

      <div className="text-sm grow overflow-auto">
        {rows.map(({ label, rate }, index, arr) => {
          const isLast = index === arr.length - 1;
          return (
            <div
              key={label}
              className={cn(
                "flex justify-between",
                !isLast ? "border-b mb-1 pb-1" : ""
              )}
            >
              <span>{label}</span>
              <span>{rate}</span>
            </div>
          );
        })}
      </div>

      <div className="text-xs text-gray-400">52-week range</div>
    </div>
  );
};

export default StatsBox;
