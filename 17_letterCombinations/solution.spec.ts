import { expect } from 'chai';
import { letterCombinationsTestCases } from './cases';
import { letterCombinations } from './solution';

describe('letterCombinations()', () => {
  letterCombinationsTestCases.forEach(({ digits, expectedOutput }) => {
    it(`should return [${expectedOutput.map(o => `'${o}'`)}] when digits=${digits}`, () => {
      const actualOutput = letterCombinations(digits);
      console.log({ actualOutput, expectedOutput });
      expect(expectedOutput).to.have.same.members(actualOutput);
    });
  });
});
