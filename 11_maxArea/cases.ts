export const maxAreaTestCases = [
  { name: '#1', height: [], expectedOutput: 0 },
  { name: '#2', height: [10], expectedOutput: 0 },
  { name: '#3', height: [10, 10], expectedOutput: 10 },
  { name: '#4', height: [1, 10], expectedOutput: 1 },
  { name: '#5', height: [1, 10, 2], expectedOutput: 2 },
  { name: '#6', height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expectedOutput: 49 },
] as {
  name: string;
  height: number[];
  expectedOutput: number;
}[];
