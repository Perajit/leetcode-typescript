import { expect } from 'chai';
import { fourSumTestCases } from './cases';
import { fourSum } from './solution';

describe('fourSum()', () => {
  fourSumTestCases.forEach(({ name, nums, target, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = fourSum(nums, target);
      expect(
        JSON.stringify(actualOutput.map(arr => arr.sort()).sort()),
      ).to.eq(
        JSON.stringify(expectedOutput.map(arr => arr.sort()).sort()),
      );
    });
  });
});
