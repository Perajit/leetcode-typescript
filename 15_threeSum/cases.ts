export const threeSumTestCases = [
  {
    name: '#1',
    nums: [-1, 0, 1, 2, -1, -4],
    expectedOutput: [
      [-1, 0, 1],
      [-1, -1, 2],
    ],
  },
  {
    name: '#2',
    nums: [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4],
    expectedOutput: [
      [-4, 0, 4],
      [-4, 1, 3],
      [-3, -1, 4],
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  {
    name: '#3',
    nums: [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0],
    expectedOutput: [
      [-5, 1, 4],
      [-4, 0, 4],
      [-4, 1, 3],
      [-2, -2, 4],
      [-2, 1, 1],
      [0, 0, 0],
    ],
  },
  {
    name: '#4',
    nums: [1, -2, -5, 3, -1, -4, 4],
    expectedOutput: [
      [1, -5, 4],
      [1, 3, -4],
      [-2, 3, -1],
    ],
  },
  {
    name: '#5',
    nums: [1, -2],
    expectedOutput: [],
  },
  {
    name: '#6',
    nums: [1, 0, 1, 2],
    expectedOutput: [],
  },
] as {
  name: string;
  nums: number[];
  expectedOutput: number[][];
}[];
