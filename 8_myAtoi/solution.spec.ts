import { expect } from 'chai';
import { myAtoiTestCases } from './cases';
import { myAtoi } from './solution';

describe('myAtoi()', () => {
  myAtoiTestCases.forEach(({ str, expectedOutput }) => {
    it(`should return ${expectedOutput} when str=${str}`, () => {
      const actualOutput = myAtoi(str);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
