import { expect } from 'chai';
import { reverseKGroupTestCases } from './cases';
import { ListNode, reverseKGroup } from './solution';

describe('reverseKGroup()', () => {
  reverseKGroupTestCases.forEach(({ name, head, k, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = reverseKGroup(head, k);
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
