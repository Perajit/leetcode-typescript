import { expect } from 'chai';
import { letterCombinationsTestCases } from './cases';
import { letterCombinations } from './solution';

describe('letterCombinations()', () => {
  letterCombinationsTestCases.forEach(({ name, digits, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = letterCombinations(digits);
      expect(
        JSON.stringify(actualOutput.sort()),
      ).to.eq(
        JSON.stringify(expectedOutput.sort()),
      );
    });
  });
});
