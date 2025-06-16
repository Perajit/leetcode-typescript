import { expect } from 'chai';
import { addTowNumbersTestCases } from './cases';
import { ListNode, addTwoNumbers } from './solution';

describe('addTowNumbers()', () => {
  addTowNumbersTestCases.forEach(({ name, l1, l2, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = addTwoNumbers(l1, l2);
      expect(
        toString(actualOutput),
      ).to.eql(
        toString(expectedOutput),
      );
    });
  });
});

function toString(node: ListNode | null): string {
  if (!node) return '';
  return toString(node.next || null) + (node ? node.val : '');
}
