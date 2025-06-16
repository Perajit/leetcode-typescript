import { expect } from 'chai';
import { isPalindromeTestCases } from './cases';
import { isPalindrome } from './solution';

describe('isPalindrome()', () => {
  isPalindromeTestCases.forEach(({ x, expectedOutput }) => {
    it(`should return ${expectedOutput} when x=${x}`, () => {
      const actualOutput = isPalindrome(x);
      expect(expectedOutput).to.eql(actualOutput);
    });
  });
});
