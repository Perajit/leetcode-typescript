import { expect } from 'chai';
import { threeSumTestCases } from './cases';
import { threeSum } from './solution';

describe('threeSum()', () => {
  threeSumTestCases.forEach(({ nums, expectedOutput }) => {
    it(`should return ${JSON.stringify(expectedOutput)} when nums=[${nums}]`, () => {
      const actualOutput = threeSum(nums);
      console.log({ actualOutput, expectedOutput });
      expect(
        expectedOutput.map(arr => arr.sort()),
      ).to.have.deep.members(
        actualOutput.map(arr => arr.sort()),
      );
    });
  });
});
