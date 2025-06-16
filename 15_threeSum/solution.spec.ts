import { expect } from 'chai';
import { threeSumTestCases } from './cases';
import { threeSum } from './solution';

describe('threeSum()', () => {
  threeSumTestCases.forEach(({ name, nums, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = threeSum(nums);
      expect(
        JSON.stringify(actualOutput.map(arr => arr.sort()).sort()),
      ).to.eq(
        JSON.stringify(expectedOutput.map(arr => arr.sort()).sort()),
      );
    });
  });
});
