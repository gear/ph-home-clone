export interface Participant {
  id: number;
  age: number;
}

export interface SleepData {
  name: string;
  sleepHours: number;
}

export interface WeekdayData {
  day: string;
  avgSleep: number;
}

export interface DatasetProps {
  ageDistributionRef: React.RefObject<HTMLDivElement>;
  weekdayPlotRef?: React.RefObject<HTMLDivElement>;
}
