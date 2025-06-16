import { expect } from 'chai';
import { addTowNumbersTestCases } from './cases';
import { ListNode, addTwoNumbers } from './solution';

describe('addTowNumbers()', () => {
  addTowNumbersTestCases.forEach(({ l1, l2, expectedOutput }) => {
    it(`should return ${toString(expectedOutput)} for ${toString(l1)} + ${toString(l2)}`, () => {
      const actualOutput = addTwoNumbers(l1, l2);
      console.log({
        actualOutput: toString(actualOutput),
        expectedOutput: toString(expectedOutput),
      });
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});

function toString(node: ListNode | null): string {
  if (!node) return '';
  return toString(node.next || null) + (node ? node.val : '');
}
