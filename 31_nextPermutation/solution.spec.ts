import { expect } from 'chai';
import { nextPermutationTestCases, reverseTestCases } from './cases';
import { nextPermutation, reverse } from './solution';

describe('nextPermutation()', () => {
  nextPermutationTestCases.forEach(({ name, nums, expectedResult }) => {
    it(`should be correct for case ${name}`, () => {
      nextPermutation(nums);
      expect(nums).to.deep.eq(expectedResult);
    });
  });
});

describe('reverse()', () => {
  reverseTestCases.forEach(({ name, nums, start, end, expectedResult }) => {
    it(`should be correct for case ${name}`, () => {
      reverse(nums, start, end);
      expect(nums).to.deep.eq(expectedResult);
    });
  });
});

