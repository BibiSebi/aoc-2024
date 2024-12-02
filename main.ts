export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//   console.log("Add 2 + 3 =", add(2, 3));
// }

const readFile = (fileName: string) => {
  const decoder = new TextDecoder("utf-8");
  const data = Deno.readFileSync(fileName);
  return decoder.decode(data);
};

const file = readFile("inputs/input-day-1-task-1.txt");

const splitByLine = file.split("\n");

const splitByPair = splitByLine.map((value) => value.split("   "));

const col1: number[] = [];
const col2: number[] = [];

splitByPair.forEach((value) => {
  col1.push(parseInt(value[0]));
  col2.push(parseInt(value[1]));
});

const col1Sorted = col1.sort((a, b) => (a > b ? 1 : -1));
const col2Sorted = col2.sort((a, b) => (a > b ? 1 : -1));

const distance = col1Sorted.reduce((acc, val, idx) => {
  const dif =
    col2Sorted[idx] > val ? col2Sorted[idx] - val : val - col2Sorted[idx];

  return acc + dif;
}, 0);

console.log(distance);
