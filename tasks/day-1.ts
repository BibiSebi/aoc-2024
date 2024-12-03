import { readFileInput } from "../utils/index.ts";

// Get the content of the input file
const file = readFileInput("input-day-1-task-1.txt");

// Split it by line
const splitByLine = file.split("\n");

//Split by space
const splitByPair = splitByLine.map((value) => value.split("   "));

// Create array for each column as assign the correct values
const leftList: number[] = [];
const rightList: number[] = [];

splitByPair.forEach((value) => {
  leftList.push(parseInt(value[0]));
  rightList.push(parseInt(value[1]));
});

const _sortArrayAsc = (array: number[]) =>
  array.sort((a, b) => (a > b ? 1 : -1));

// -------------- Task 1 --------------
const calculateDistance = () => {
  const leftListSorted = _sortArrayAsc(leftList);
  const rightListSorted = _sortArrayAsc(rightList);

  const distance = leftListSorted.reduce((acc, val, idx) => {
    const dif =
      rightListSorted[idx] > val
        ? rightListSorted[idx] - val
        : val - rightListSorted[idx];

    return acc + dif;
  }, 0);

  console.log("Day 1 - Task 1 -->", distance);

  return distance;
};

// -------------- Task 2 --------------
// const similarityMap = new Map<number, number>();
const calSimilarityScore = () => {
  const score = leftList.reduce((acc, currentVal) => {
    // const valueFromMap = similarityMap.get(currentVal);
    // if (valueFromMap) {
    //   console.log(valueFromMap);
    //   return acc + valueFromMap;
    // }

    const nrOfOccurrences = rightList.filter(
      (rightVal) => currentVal === rightVal
    ).length;

    // similarityMap.set(currentVal, nrOfOccurrences);
    return acc + currentVal * nrOfOccurrences;
  }, 0);

  console.log("Day 1 - Task 2 -->", score);

  return score;
};

export const runDay1 = () => {
  calculateDistance();
  calSimilarityScore();
};
