import { expect } from 'chai';
import { romanToIntTestCases } from './cases';
import { romanToInt } from './solution';

describe('romanToInt()', () => {
  romanToIntTestCases.forEach(({ s, expectedOutput }) => {
    it(`should return ${expectedOutput} when s=${s}`, () => {
      const actualOutput = romanToInt(s);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
