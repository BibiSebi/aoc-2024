import { readFileInput } from "../utils/index.ts";

const file = readFileInput("input-day-2.txt");

const calculateSafeReports = () => {
  const fileByLine: string[] = file.split("\n");
  const safeReports = fileByLine.filter((line) => {
    const splitBySpace = line.split(" ");

    const firstElement = parseInt(splitBySpace[0]);
    const secondElement = parseInt(splitBySpace[1]);
    const isSafeReport = splitBySpace.every((value, idx) => {
      // Last element
      if (idx === splitBySpace.length - 1) {
        return true;
      }

      const num = parseInt(value);
      const nextElement = parseInt(splitBySpace[idx + 1]);

      if (firstElement === secondElement) {
        return false;
      }

      // No increase or decrease
      if (num - nextElement === 0) {
        return false;
      }

      const isAsc = firstElement < secondElement;

      if (isAsc) {
        return nextElement - num <= 3 && nextElement - num > 0;
      }

      return num - nextElement <= 3 && num - nextElement > 0;
    });

    return isSafeReport;
  });

  console.log("Day 2 - Task 1 -->", safeReports.length);

  return safeReports.length;
};

export const runDay2 = () => {
  calculateSafeReports();
};
