export const removeElementTestCases = [
  { nums: [3, 2, 2, 3], val: 3, expectedResult: [2, 2] },
  { nums: [3], val: 3, expectedResult: [] },
  { nums: [2], val: 3, expectedResult: [2] },
  { nums: [3, 3], val: 5, expectedResult: [3,3] },
  { nums: [1, 2, 3, 2 ,5 ,3], val: 3, expectedResult: [1, 2, 2, 5] },
  { nums: [1, 2, 3, 2, 5, 3, 3], val: 3, expectedResult: [1 ,2, 2, 5] },
  { nums: [1, 2, 3, 2, 5, 3, 4], val: 3, expectedResult: [1 ,2, 2, 4, 5] },
  { nums: [3, 3, 3, 2, 5, 3, 4], val: 3, expectedResult: [2, 4, 5] },
  { nums: [1, 2, 3, 2, 5, 3], val: 3, expectedResult: [1, 2, 2, 5] },
  { nums: [1, 2, 0, 2, 5, 3], val: 3, expectedResult: [0, 1, 2, 2, 5] },
];
