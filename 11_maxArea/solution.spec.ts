import { expect } from 'chai';
import { maxAreaTestCases } from './cases';
import { maxArea } from './solution';

describe('maxArea()', () => {
  maxAreaTestCases.forEach(({ name, height, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = maxArea(height);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
