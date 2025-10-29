export const twoSumTestCases = [
  { nums: [2, 7, 11, 15], target: 9, expectedOutput: [0, 1] },
  { nums: [3, 2, 4], target: 6, expectedOutput: [1, 2] },
  { nums: [3, 3], target: 6, expectedOutput: [0, 1] },
  { nums: [11, 7, 2, 1, 15], target: 17, expectedOutput: [2, 4] },
] as {
  nums: number[];
  target: number;
  expectedOutput: number[];
}[];
