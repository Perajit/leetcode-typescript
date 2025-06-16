import { expect } from 'chai';
import { removeNthFromEndTestCases } from './cases';
import { ListNode, removeNthFromEnd } from './solution';

describe('removeNthFromEnd()', () => {
  removeNthFromEndTestCases.forEach(({ head, n, expectedOutput }) => {
    it(`should return ${toString(expectedOutput)} when head=${toString(head)}, n=${n}`, () => {
      const actualOutput = removeNthFromEnd(head, n);
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
