import { expect } from 'chai';
import { isValidTestCases } from './cases';
import { isValid } from './solution';

describe('isValid()', () => {
  isValidTestCases.forEach(({ s, expectedOutput }) => {
    it(`should return ${expectedOutput} when s=${s}`, () => {
      const actualOutput = isValid(s);
      expect(expectedOutput).to.eql(actualOutput);
    });
  });
});
