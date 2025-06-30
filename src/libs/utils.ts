import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function validateNameWithSlug(name: string, slug: string): boolean {
  const convertedSlug = convertNameToSlug(name);
  return convertedSlug === slug;
}

export function getPrevNext<T>(arr: T[], index: number): { prev: T; next: T } {
  const len = arr.length;
  if (len === 0) throw new Error("Array is empty");
  const prev = arr[(index - 1 + len) % len];
  const next = arr[(index + 1) % len];
  return { prev, next };
}
