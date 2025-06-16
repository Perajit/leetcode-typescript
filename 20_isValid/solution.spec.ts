import { expect } from 'chai';
import { isValidTestCases } from './cases';
import { isValid } from './solution';

describe('isValid()', () => {
  isValidTestCases.forEach(({ name, s, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = isValid(s);
      expect(expectedOutput).to.eql(actualOutput);
    });
  });
});
