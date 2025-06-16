import { expect } from 'chai';
import { removeDuplicatesTestCases } from './cases';
import { removeDuplicates } from './solution';

describe('removeDuplicates()', () => {
  removeDuplicatesTestCases.forEach(({ name, nums, expectedResult }) => {
    it(`should be correct for case ${name}`, () => {
      nums = nums.slice(0);

      const actualOutput = removeDuplicates(nums);
      expect(actualOutput).to.eql(expectedResult.length);
      expect(
        JSON.stringify(nums.slice(0, expectedResult.length)),
      ).to.eq(
        JSON.stringify(expectedResult),
      );
    });
  });
});
