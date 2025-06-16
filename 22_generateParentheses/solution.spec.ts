import { expect } from 'chai';
import { generateParenthesesTestCases } from './cases';
import { generateParentheses } from './solution';

describe('generateParentheses()', () => {
  generateParenthesesTestCases.forEach(({ n, expectedOutput }) => {
    it(`should return [${expectedOutput.map(s => `'${s}'`)}] when n=${n}`, () => {
      const actualOutput = generateParentheses(n);
      console.log({
        actualOutput: actualOutput.sort(),
        expectedOutput: expectedOutput.sort(),
      });
      expect(expectedOutput).to.have.same.members(actualOutput);
    });
  });
});
