import { expect } from 'chai';
import { maxAreaTestCases } from './cases';
import { maxArea } from './solution';

describe('maxArea()', () => {
  maxAreaTestCases.forEach(({ height, expectedOutput }) => {
    it(`should return [${expectedOutput}] when nums=[${height}]`, () => {
      const actualOutput = maxArea(height);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
