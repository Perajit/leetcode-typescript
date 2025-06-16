import { expect } from 'chai';
import { myAtoiTestCases } from './cases';
import { myAtoi } from './solution';

describe('myAtoi()', () => {
  myAtoiTestCases.forEach(({ name, str, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = myAtoi(str);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
