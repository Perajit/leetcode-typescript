import { expect } from 'chai';
import { strStrTestCases } from './cases';
import { strStr } from './solution';

describe('strStr()', () => {
  strStrTestCases.forEach(({ haystack, needle, expectedOutput }) => {
    it(`should return ${expectedOutput} when haystack='${haystack}', needle='${needle}'`, () => {
      const actualOutput = strStr(haystack, needle);
      expect(expectedOutput).to.eql(actualOutput);
    });
  });
});
