import { expect } from 'chai';
import { divideTestCases } from './cases';
import { divide } from './solution';

describe('divide()', () => {
  divideTestCases.forEach(({ name, dividend, divisor, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = divide(dividend, divisor);
      expect(actualOutput).to.be.eq(expectedOutput);
    });
  });
});