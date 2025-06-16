export const removeDuplicatesTestCases = [
  { nums: [1, 1, 2], expectedResult: [1, 2] },
  { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expectedResult: [0, 1, 2, 3, 4] },
  { nums: [1, 2, 3], expectedResult: [1, 2, 3] },
  { nums: [1, 1], expectedResult: [1] },
  { nums: [1], expectedResult: [1] },
  { nums: [], expectedResult: [] },
  { nums: [-1, 0, 0, 0, 0, 3, 3], expectedResult: [-1, 0, 3] },
  { nums: [1, 1, 2, 3], expectedResult: [1, 2, 3] },
];
