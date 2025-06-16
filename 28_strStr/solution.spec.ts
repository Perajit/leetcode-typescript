import { expect } from 'chai';
import { strStrTestCases } from './cases';
import { strStr } from './solution';

describe('strStr()', () => {
  strStrTestCases.forEach(({ name, haystack, needle, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = strStr(haystack, needle);
      expect(expectedOutput).to.eql(actualOutput);
    });
  });
});
