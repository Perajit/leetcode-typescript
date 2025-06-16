export const removeElementTestCases = [
  { name: '#1', nums: [3, 2, 2, 3], val: 3, expectedResult: [2, 2] },
  { name: '#2', nums: [3], val: 3, expectedResult: [] },
  { name: '#3', nums: [3], val: 2, expectedResult: [3] },
  { name: '#4', nums: [3], val: 4, expectedResult: [3] },
  { name: '#5', nums: [3, 3], val: 2, expectedResult: [3, 3] },
  { name: '#6', nums: [3, 3], val: 4, expectedResult: [3, 3] },
  { name: '#7', nums: [0, 1, 2, 3], val: 4, expectedResult: [0, 1, 2, 3] },
  { name: '#8', nums: [5, 2, 3, 2, 3, 4, 1], val: 3, expectedResult: [1, 2, 2, 5, 4] },
  { name: '#9', nums: [3, 3, 3], val: 3, expectedResult: [] },
  { name: '#10', nums: [3, 3, 3], val: 0, expectedResult: [3, 3, 3] },
  { name: '#11', nums: [1, 2, 3, 2, 5, 3], val: 3, expectedResult: [1, 2, 2, 5] },
  { name: '#12', nums: [1, 2, 3, 2, 5, 3, 3], val: 3, expectedResult: [1, 2, 2, 5] },
  { name: '#13', nums: [1, 2, 3, 2, 5, 3, 4], val: 3, expectedResult: [1, 2, 2, 4, 5] },
  { name: '#14', nums: [3, 3, 3, 2, 5, 3, 4], val: 3, expectedResult: [2, 4, 5] },
  { name: '#15', nums: [1, 2, 3, 2, 5, 3], val: 3, expectedResult: [1, 2, 2, 5] },
  { name: '#16', nums: [1, 2, 0, 2, 5, 3], val: 3, expectedResult: [0, 1, 2, 2, 5] },
] as {
  name: string;
  nums: number[];
  val: number;
  expectedResult: number[];
}[];
