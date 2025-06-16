import { expect } from 'chai';
import { longestLengthSubstrTestCases } from './cases';
import { longestLengthSubstr } from './solution';

describe('longestLengthSubstr()', () => {
  longestLengthSubstrTestCases.forEach(({ name, s, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = longestLengthSubstr(s);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
