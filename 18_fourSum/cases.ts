export const fourSumTestCases = [
  {
    name: '#1',
    nums: [1, -2],
    target: -1,
    expectedOutput: [],
  },
  {
    name: '#2',
    nums: [1, 0, 1, 2],
    target: 0,
    expectedOutput: [],
  },
  {
    name: '#3',
    nums: [1, 0, 1, 2],
    target: 4,
    expectedOutput: [[1, 0, 1, 2]],
  },
  {
    name: '#4',
    nums: [1, 0, -1, 0, -2, 2],
    target: 0,
    expectedOutput: [
      [-2, -1, 1 ,2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ],
  },
  {
    name: '#5',
    nums: [2, 2, 2, 2, 2],
    target: 8,
    expectedOutput: [[2, 2, 2, 2]],
  },
  {
    name: '#6',
    nums: [-3, -1, 0, 2, 4, 5],
    target: 2,
    expectedOutput: [[-3, -1, 2, 4]],
  },
] as {
  name: string;
  nums: number[];
  target: number;
  expectedOutput: number[][];
}[];
