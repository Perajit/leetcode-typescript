import { expect } from 'chai';
import { mergeKListsTestCases } from './cases';
import { ListNode, mergeKLists } from './solution';

describe('mergeKLists()', () => {
  mergeKListsTestCases.forEach(({ lists, expectedOutput }) => {
    it(`should return ${toString(expectedOutput)} for ${lists.map(node => toString(node))}`, () => {
      const actualOutput = mergeKLists(lists);
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
