import { expect } from 'chai';
import { twoSumTestCases } from './cases';
import { twoSum } from './solution';

describe('twoSum()', () => {
  twoSumTestCases.forEach(({ name, nums, target, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = twoSum(nums, target);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
