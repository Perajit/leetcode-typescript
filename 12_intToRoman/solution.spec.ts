import { expect } from 'chai';
import { intToRomanTestCases } from './cases';
import { intToRoman } from './solution';

describe('intToRoman()', () => {
  intToRomanTestCases.forEach(({ name, num, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = intToRoman(num);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
