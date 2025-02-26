import dynamic from "next/dynamic";
import { Suspense } from "react";
/* eslint-disable react/display-name */
const Plot = dynamic(
  () =>
    import("./Plot").catch((err) => {
      console.error("Error loading Plot:", err);
      return () => <div>Error loading plot. Please try refreshing.</div>;
    }),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-pulse">Loading plot...</div>
      </div>
    ),
  }
);
/* eslint-disable react/display-name */
const SleepMosaicPlot = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Plot />
    </Suspense>
  );
};

Plot.displayName = "DynamicPlot";
SleepMosaicPlot.displayName = "SleepMosaicPlot";
export default SleepMosaicPlot;
