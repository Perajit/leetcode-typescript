import { expect } from 'chai';
import { longestCommonPrefixTestCases } from './cases';
import { longestCommonPrefix } from './solution';

describe('longestCommonPrefix()', () => {
  longestCommonPrefixTestCases.forEach(({ strs, expectedOutput }) => {
    it(`should return '${expectedOutput}' when strs=[${strs}]`, () => {
      const actualOutput = longestCommonPrefix(strs);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
