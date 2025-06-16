import { expect } from 'chai';
import { convertTestCases } from './cases';
import { convert } from './solution';

describe('convert()', () => {
  convertTestCases.forEach(({ s, numRows, expectedOutput }) => {
    it(`should return ${expectedOutput} when s="${s}", numRows=${numRows}`, () => {
      const actualOutput = convert(s, numRows);
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});
