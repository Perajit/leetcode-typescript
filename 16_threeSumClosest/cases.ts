export const threeSumClosestTestCases = [
  {
    nums: [-1, 2, 1, -4],
    target: 1,
    expectedOutput: 2,
  },
  {
    nums: [-1, 2, 1, 4],
    target: 1,
    expectedOutput: 2,
  },
  {
    nums: [-1, 2, 1, 4],
    target: 4,
    expectedOutput: 4,
  },
  {
    nums: [1, 0, 1, 2],
    target: 2,
    expectedOutput: 2,
  },
  {
    nums: [1, -2, -6, 2],
    target: 0,
    expectedOutput: 1,
  },
  {
    nums: [1, 2, 4, 8, 16, 32, 64, 128],
    target: 82,
    expectedOutput: 82,
  },
  {
    nums: [-1, 0, 1, 2, -1, -4],
    target: 0,
    expectedOutput: 0,
  },
  {
    nums: [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4],
    target: 0,
    expectedOutput: 0,
  },
  {
    nums: [1, 2, 2, 4, 6, 6],
    target: 6,
    expectedOutput: 7,
  },
  {
    nums: [1, 1, 2, 2, 8, 8],
    target: 8,
    expectedOutput: 10,
  },
  {
    nums: [4, 0, 5, -5, 3, 3, 0, -4, -5],
    target: -2,
    expectedOutput: -2,
  },
] as {
  nums: number[];
  target: number;
  expectedOutput: number;
}[];
