import { expect } from 'chai';
import { swapPairsTestCases } from './cases';
import { ListNode, swapPairs } from './solution';

describe('swapPairs()', () => {
  swapPairsTestCases.forEach(({ head, expectedOutput }) => {
    it(`should return ${toString(expectedOutput)} when head=${toString(head)}`, () => {
      const actualOutput = swapPairs(head);
      console.log({
        actualOutput: toString(actualOutput),
        expectedOutput: toString(expectedOutput),
      });
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});

function toString(node?: ListNode | null): string {
  if (!node) return '';
  return (node ? node.val : '') + toString(node.next || null);
}
