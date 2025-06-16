import { expect } from 'chai';
import { romanToIntTestCases } from './cases';
import { romanToInt } from './solution';

describe('romanToInt()', () => {
  romanToIntTestCases.forEach(({ name, s, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = romanToInt(s);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
