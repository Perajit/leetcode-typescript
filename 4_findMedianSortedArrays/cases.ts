export const findMedianSortedArraysTestCases = [
  { nums1: [1, 3], nums2: [2], expectedOutput: 2.0 },
  { nums1: [1, 2], nums2: [3, 4], expectedOutput: 2.5 },
  { nums1: [0, 0], nums2: [0, 0], expectedOutput: 0.0 },
  { nums1: [], nums2: [1], expectedOutput: 1.0 },
  { nums1: [2], nums2: [], expectedOutput: 2.0 },
  { nums1: [], nums2: [], expectedOutput: 0 },
  { nums1: [1,1,6], nums2: [2,2,4,6,8], expectedOutput: 3 },
] as {
  nums1: number[];
  nums2: number[];
  expectedOutput: number;
}[];
