import { expect } from 'chai';
import { testCases } from './cases';
import { ListNode, mergeTwoLists } from './solution';

describe('mergeTwoLists()', () => {
  testCases.forEach(({ l1, l2, expectedOutput }) => {
    it(`should return ${toString(expectedOutput)} when l1=${toString(l1)}, l2=${toString(l2)}`, () => {
      const actualOutput = mergeTwoLists(l1, l2);
      console.log({ actualOutput, expectedOutput });
      expect(actualOutput).to.eql(expectedOutput);
    });
  });
});

function toString(node?: ListNode | null): string {
  if (!node) return '';
  return (node ? node.val : '') + toString(node.next || null);
}
