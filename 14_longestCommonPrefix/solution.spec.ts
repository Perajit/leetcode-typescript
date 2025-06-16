import { expect } from 'chai';
import { longestCommonPrefixTestCases } from './cases';
import { longestCommonPrefix } from './solution';

describe('longestCommonPrefix()', () => {
  longestCommonPrefixTestCases.forEach(({ name, strs, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = longestCommonPrefix(strs);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
