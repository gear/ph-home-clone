import HeartBeatRateChart from "@/app/shi-dashboard/components/HeartBeatRateChart";

const csvPaths = [
  "/data/subject_001.csv",
  "/data/subject_002.csv",
  "/data/subject_003.csv",
];

export default function SHIDashboard() {
  return (
    <div className="flex flex-col px-6 max-w-screen-xl mx-auto gap-4">
      <h1 className="text-3xl font-bold">SHI Summer School 2025</h1>

      <span className="text-sm">
        There are 
        <span className="border-b-2 border-b-blue-400"> 15 interactive graphs</span>, showing the relationship between sleep and other lifestyle aspects. These data is synthesized by sampling from a real data distribution, which consists of 16290 person-days of minute-by-minute recordings.
      </span>

      <HeartBeatRateChart
        csvPaths={csvPaths}
        width={1184}
        height={500}
        text="Heart Rate"
      />
    </div>
  );
}
