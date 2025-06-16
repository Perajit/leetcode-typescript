import { expect } from 'chai';
import { removeElementTestCases } from './cases';
import { removeElement } from './solution';

describe('removeElement()', () => {
  removeElementTestCases.forEach(({ nums, val, expectedResult }) => {
    it(`should result as [${expectedResult}] when nums=[${nums}], val=${val}`, () => {
      nums = nums.slice(0);

      const actualOutput = removeElement(nums, val);
      console.log({ nums, expectedResult });
      expect(nums.slice(0, expectedResult.length)).to.have.same.members(expectedResult);
      expect(actualOutput).to.eql(expectedResult.length);
    });
  });
});
