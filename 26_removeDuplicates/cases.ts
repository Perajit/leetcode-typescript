export const removeDuplicatesTestCases = [
  { name: '#1', nums: [1, 1, 2], expectedResult: [1, 2] },
  { name: '#2', nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expectedResult: [0, 1, 2, 3, 4] },
  { name: '#3', nums: [1, 2, 3], expectedResult: [1, 2, 3] },
  { name: '#4', nums: [1, 1], expectedResult: [1] },
  { name: '#5', nums: [1], expectedResult: [1] },
  { name: '#6', nums: [], expectedResult: [] },
  { name: '#7', nums: [-1, 0, 0, 0, 0, 3, 3], expectedResult: [-1, 0, 3] },
  { name: '#8', nums: [1, 1, 2, 3], expectedResult: [1, 2, 3] },
] as {
  name: string;
  nums: number[];
  expectedResult: number[];
}[];
