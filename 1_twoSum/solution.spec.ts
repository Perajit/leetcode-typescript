import { expect } from 'chai';
import { twoSumTestCases } from './cases';
import { twoSum } from './solution';

describe('twoSum()', () => {
  twoSumTestCases.forEach(({ nums, target, expectedOutput }) => {
    it(`should return [${expectedOutput}] when nums=[${nums}], target=${target}`, () => {
      const actualOutput = twoSum(nums, target);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
