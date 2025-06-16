import { expect } from 'chai';
import { threeSumClosestTestCases } from './cases';
import { threeSumClosest } from './solution';

describe('threeSumClosest()', () => {
  threeSumClosestTestCases.forEach(({ nums, target, expectedOutput }) => {
    it(`should return ${expectedOutput} when nums=[${nums}], target=${target}`, () => {
      const actualOutput = threeSumClosest(nums, target);
      console.log({ actualOutput, expectedOutput });
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
