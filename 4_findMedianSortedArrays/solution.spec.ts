import { expect } from 'chai';
import { findMedianSortedArraysTestCases } from './cases';
import { findMedianSortedArrays } from './solution';

describe('findMedianSortedArrays()', () => {
  findMedianSortedArraysTestCases.forEach(({ nums1, nums2, expectedOutput }) => {
    it(`should return ${expectedOutput} when nums1=[${nums1}], nums2=[${nums2}]`, () => {
      const actualOutput = findMedianSortedArrays(nums1, nums2);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
