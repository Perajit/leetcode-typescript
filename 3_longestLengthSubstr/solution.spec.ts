import { expect } from 'chai';
import { longestLengthSubstrTestCases } from './cases';
import { longestLengthSubstr } from './solution';

describe('longestLengthSubstr()', () => {
  longestLengthSubstrTestCases.forEach(({ s, expectedOutput }) => {
    it(`should return ${expectedOutput} when s=${s}`, () => {
      const actualOutput = longestLengthSubstr(s);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
