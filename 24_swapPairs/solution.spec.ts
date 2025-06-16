import { expect } from 'chai';
import { swapPairsTestCases } from './cases';
import { ListNode, swapPairs } from './solution';

describe('swapPairs()', () => {
  swapPairsTestCases.forEach(({ name, head, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = swapPairs(head);
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
