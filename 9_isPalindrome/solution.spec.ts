import { expect } from 'chai';
import { isPalindromeTestCases } from './cases';
import { isPalindrome } from './solution';

describe('isPalindrome()', () => {
  isPalindromeTestCases.forEach(({ name, x, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = isPalindrome(x);
      expect(expectedOutput).to.eql(actualOutput);
    });
  });
});
