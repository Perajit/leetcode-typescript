import { expect } from 'chai';
import { removeElementTestCases } from './cases';
import { removeElement } from './solution';

describe('removeElement()', () => {
  removeElementTestCases.forEach(({ name, nums, val, expectedResult }) => {
    it(`should be correct for case ${name}`, () => {
      nums = nums.slice(0);

      const actualOutput = removeElement(nums, val);
      expect(actualOutput).to.eql(expectedResult.length);
      expect(
        JSON.stringify(nums.slice(0, expectedResult.length).sort()),
      ).to.eq(
        JSON.stringify(expectedResult.sort()),
      );
    });
  });
});
