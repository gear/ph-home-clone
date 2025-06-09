import HeartBeatRateChart from "@/app/shi-dashboard/components/HeartBeatRateChart";

const csvPaths = [
  "/data/subject_001.csv",
  "/data/subject_002.csv",
  "/data/subject_003.csv",
];

export default function SHIDashboard() {
  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">
      <h1 className="text-3xl font-bold">Primary mortgage market survey</h1>

      <span className="text-sm">
        Each week, Freddie Mac surveys lenders on rates and points for their
        <span className="border-b-2 border-b-blue-400"> 30-year fixed-rate</span>, <span className="border-b-2 border-b-yellow-400"> 15-year fixed-rate</span>, and other mortgage
        products. Data as of May 2, 2024.
      </span>

      <HeartBeatRateChart
        csvPaths={csvPaths}
        width={1040}
        height={500}
        text="Heart Rate"
      />
    </div>
  );
}
