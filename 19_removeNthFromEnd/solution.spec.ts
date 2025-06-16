import { expect } from 'chai';
import { removeNthFromEndTestCases } from './cases';
import { ListNode, removeNthFromEnd } from './solution';

describe('removeNthFromEnd()', () => {
  removeNthFromEndTestCases.forEach(({ name, head, n, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = removeNthFromEnd(head, n);
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
