import { expect } from 'chai';
import { testCases } from './cases';
import { ListNode, mergeTwoLists } from './solution';

describe('mergeTwoLists()', () => {
  testCases.forEach(({ name, l1, l2, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = mergeTwoLists(l1, l2);
      expect(
        toString(actualOutput),
      ).to.eql(
        toString(expectedOutput),
      );
    });
  });
});

function toString(node?: ListNode | null): string {
  if (!node) return '';
  return (node ? node.val : '') + toString(node.next || null);
}
