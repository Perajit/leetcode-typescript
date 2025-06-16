export const findMedianSortedArraysTestCases = [
  { name: '#1', nums1: [1, 3], nums2: [2], expectedOutput: 2.0 },
  { name: '#2', nums1: [1, 2], nums2: [3, 4], expectedOutput: 2.5 },
  { name: '#3', nums1: [0, 0], nums2: [0, 0], expectedOutput: 0.0 },
  { name: '#4', nums1: [], nums2: [1], expectedOutput: 1.0 },
  { name: '#5', nums1: [2], nums2: [], expectedOutput: 2.0 },
  { name: '#6', nums1: [], nums2: [], expectedOutput: 0 },
  { name: '#7', nums1: [1,1,6], nums2: [2,2,4,6,8], expectedOutput: 3 },
] as {
  name: string;
  nums1: number[];
  nums2: number[];
  expectedOutput: number;
}[];
