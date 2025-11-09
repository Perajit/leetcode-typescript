export const nextPermutationTestCases = [
  { name: '#1', nums: [1, 2, 3], expectedResult: [1, 3, 2] },
  { name: '#2', nums: [3, 2, 1], expectedResult: [1, 2, 3] },
  { name: '#3', nums: [1, 1, 5], expectedResult: [1, 5, 1] },
  { name: '#4', nums: [1, 3, 2], expectedResult: [2, 1, 3] },
  { name: '#5', nums: [1, 3, 9, 8, 6], expectedResult: [1, 6, 3, 8, 9] },
  { name: '#6', nums: [1, 6, 9, 8, 3], expectedResult: [1, 8, 3, 6, 9] },
  { name: '#7', nums: [1, 6, 9, 5, 3], expectedResult: [1, 9, 3, 5, 6] },
  { name: '#8', nums: [1, 6, 9, 8, 3, 2], expectedResult: [1, 8, 2, 3, 6, 9] },
  { name: '#9', nums: [1, 8, 9, 6, 3, 2], expectedResult: [1, 9, 2, 3, 6, 8] },
] as {
  name: string;
  nums: number[];
  expectedResult: number[];
}[];

export const reverseTestCases = [
  { name: '#1', nums: [1, 8, 9, 6, 3], start: 2, end: 5, expectedResult: [1, 8, 3, 6, 9] },
  { name: '#2', nums: [1, 8, 9, 6, 3], start: 1, end: 4, expectedResult: [1, 6, 9, 8, 3] },
  { name: '#3', nums: [1, 6, 9, 8, 3, 2], start: 2, end: 6, expectedResult: [1, 6, 2, 3, 8, 9] },
  { name: '#4', nums: [1, 6, 9, 8, 3, 2], start: 1, end: 5, expectedResult: [1, 3, 8, 9, 6, 2] },
  { name: '#5', nums: [1, 6, 9, 8, 3, 2], start: 1, end: 6, expectedResult: [1, 2, 3, 8, 9, 6] },
] as {
  name: string;
  nums: number[];
  start: number;
  end: number;
  expectedResult: number[];
}[];
