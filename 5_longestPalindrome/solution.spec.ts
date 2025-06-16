import { expect } from 'chai';
import { isPalindromeTestCases, longestPalindromeTestCases } from './cases';
import { isPalindrome, longestPalindrome } from './solution';

describe('longestPalindrome()', () => {
  longestPalindromeTestCases.forEach(({ name, s, expectedOutputs }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = longestPalindrome(s);
      expect(expectedOutputs).to.include(actualOutput);
    });
  });
});

describe('isPalindrome()', () => {
  isPalindromeTestCases.forEach(({ name, s, start, end, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = isPalindrome(s, start, end);
      expect(expectedOutput).to.eql(actualOutput);
    });
  });
});
