import { expect } from 'chai';
import { reverseTestCases } from './cases';
import { reverse } from './solution';

describe('reverse()', () => {
  reverseTestCases.forEach(({ x, expectedOutput }) => {
    it(`should return ${expectedOutput} when x=${x}`, () => {
      const actualOutput = reverse(x);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
