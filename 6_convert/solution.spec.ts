import { expect } from 'chai';
import { convertTestCases } from './cases';
import { convert } from './solution';

describe('convert()', () => {
  convertTestCases.forEach(({ name, s, numRows, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = convert(s, numRows);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
