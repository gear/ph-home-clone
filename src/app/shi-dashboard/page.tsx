import HeartBeatRateChart from "@/app/shi-dashboard/components/HeartBeatRateChart";

const csvPaths = [
  "/data/subject_001.csv",
  "/data/subject_002.csv",
  "/data/subject_003.csv",
];

export default function SHIDashboard() {
  return (
    <div className="flex flex-col items-center gap-4 border-2 border-gray-300 rounded-md p-4 m-4">
      <HeartBeatRateChart
        csvPaths={csvPaths}
        width={1040}
        height={600}
        text="Heart Rate"
      />
    </div>
  );
}
