import { expect } from 'chai';
import { mergeKListsTestCases } from './cases';
import { ListNode, mergeKLists } from './solution';

describe('mergeKLists()', () => {
  mergeKListsTestCases.forEach(({ name, lists, expectedOutput }) => {
    it(`should be correct for case ${name}`, () => {
      const actualOutput = mergeKLists(lists);
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
