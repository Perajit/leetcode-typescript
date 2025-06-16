import { expect } from 'chai';
import { intToRomanTestCases } from './cases';
import { intToRoman } from './solution';

describe('intToRoman()', () => {
  intToRomanTestCases.forEach(({ num, expectedOutput }) => {
    it(`should return '${expectedOutput}' when num=${num}`, () => {
      const actualOutput = intToRoman(num);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
