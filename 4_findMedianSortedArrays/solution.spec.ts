import { expect } from 'chai';
import { findMedianSortedArraysTestCases } from './cases';
import { findMedianSortedArrays } from './solution';

describe('findMedianSortedArrays()', () => {
  findMedianSortedArraysTestCases.forEach(({ name, nums1, nums2, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = findMedianSortedArrays(nums1, nums2);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
