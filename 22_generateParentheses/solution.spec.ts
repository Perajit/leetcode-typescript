import { expect } from 'chai';
import { generateParenthesesTestCases } from './cases';
import { generateParentheses } from './solution';

describe('generateParentheses()', () => {
  generateParenthesesTestCases.forEach(({ name, n, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = generateParentheses(n);
      expect(
        JSON.stringify(actualOutput.sort()),
      ).to.eq(
        JSON.stringify(expectedOutput.sort()),
      );
    });
  });
});
