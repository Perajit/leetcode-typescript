import { expect } from 'chai';
import { threeSumClosestTestCases } from './cases';
import { threeSumClosest } from './solution';

describe('threeSumClosest()', () => {
  threeSumClosestTestCases.forEach(({ name, nums, target, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = threeSumClosest(nums, target);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
