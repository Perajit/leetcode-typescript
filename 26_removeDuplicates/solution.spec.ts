import { expect } from 'chai';
import { removeDuplicatesTestCases } from './cases';
import { removeDuplicates } from './solution';

describe('removeDuplicates()', () => {
  removeDuplicatesTestCases.forEach(({ nums, expectedResult }) => {
    it(`should return ${expectedResult.length} modified nums to start with [${expectedResult}] and when nums=[${nums}]`, () => {
      nums = nums.slice(0);

      const actualOutput = removeDuplicates(nums);
      console.log({ nums, expectedResult });
      expect(nums.slice(0, expectedResult.length)).to.have.same.members(expectedResult);
      expect(actualOutput).to.eql(expectedResult.length);
    });
  });
});
