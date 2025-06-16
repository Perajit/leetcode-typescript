export const maxAreaTestCases = [
  { height: [], expectedOutput: 0 },
  { height: [10], expectedOutput: 0 },
  { height: [10, 10], expectedOutput: 10 },
  { height: [1, 10], expectedOutput: 1 },
  { height: [1, 10, 2], expectedOutput: 2 },
  { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expectedOutput: 49 },
] as {
  height: number[];
  expectedOutput: number;
}[];
