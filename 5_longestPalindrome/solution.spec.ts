import { expect } from 'chai';
import { isPalindromeTestCases, longestPalindromeTestCases } from './cases';
import { isPalindrome, longestPalindrome } from './solution';

describe('longestPalindrome()', () => {
  longestPalindromeTestCases.forEach(({ s, expectedOutputs }) => {
    it(`should return ${expectedOutputs.join('|')} when s="${s}"`, () => {
      const actualOutput = longestPalindrome(s);
      expect(expectedOutputs).to.include(actualOutput);
    });
  });
});

describe('isPalindrome()', () => {
  isPalindromeTestCases.forEach(({ s, start, end, expectedOutput }) => {
    it(`should return ${expectedOutput} when s="${s}", start=${start}, end=${end}`, () => {
      const actualOutput = isPalindrome(s, start, end);
      expect(expectedOutput).to.eql(actualOutput);
    });
  });
});
