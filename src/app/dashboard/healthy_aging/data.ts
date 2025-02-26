import { Participant, SleepData, WeekdayData } from "@/types/sleep";

export const healthyAgingData = {
  sleep: Array.from<unknown, SleepData>({ length: 15 }, (_, i) => ({
    name: `Person ${i + 1}`,
    sleepHours: 6.5 + Math.random() * 2
  })),
  participants: Array.from<unknown, Participant>({ length: 50 }, (_, i) => ({
    id: i + 1,
    age: Math.floor(80 + Math.random() * 10)
  }))
};

export const jmdcData = {
  participants: Array.from<unknown, Participant>({ length: 100 }, (_, i) => ({
    id: i + 1,
    age: Math.floor(25 + Math.random() * 40)
  }))
};

export const weekdayData: WeekdayData[] = [
  { day: "Monday", avgSleep: 7.2 },
  { day: "Tuesday", avgSleep: 6.8 },
  { day: "Wednesday", avgSleep: 7.5 },
  { day: "Thursday", avgSleep: 6.9 },
  { day: "Friday", avgSleep: 6.5 },
  { day: "Saturday", avgSleep: 8.1 },
  { day: "Sunday", avgSleep: 7.8 },
];
