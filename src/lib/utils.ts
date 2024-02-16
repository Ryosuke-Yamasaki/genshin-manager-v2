import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FormatPercent = (n: number) => {
  return new Intl.NumberFormat("ja", {
    style: "percent",
    maximumSignificantDigits: 3,
  }).format(n);
};

const IntStatId = (statId: string) => {
  const subStats = ["101", "201", "301", "400"];
  return subStats.includes(statId);
};

export { cn, FormatPercent, IntStatId };
