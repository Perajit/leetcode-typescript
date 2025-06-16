import { expect } from 'chai';
import { reverseTestCases } from './cases';
import { reverse } from './solution';

describe('reverse()', () => {
  reverseTestCases.forEach(({ name, x, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = reverse(x);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
