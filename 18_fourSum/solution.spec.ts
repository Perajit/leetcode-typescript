import { expect } from 'chai';
import { fourSumTestCases } from './cases';
import { fourSum } from './solution';

describe('fourSum()', () => {
  fourSumTestCases.forEach(({ nums, target, expectedOutput }) => {
    it(`should return ${JSON.stringify(expectedOutput)} when nums=[${nums}], target=${target}`, () => {
      const actualOutput = fourSum(nums, target);
      console.log({ actualOutput, expectedOutput });
      expect(
        expectedOutput.map(arr => arr.sort()),
      ).to.have.deep.members(
        actualOutput.map(arr => arr.sort()),
      );
    });
  });
});
