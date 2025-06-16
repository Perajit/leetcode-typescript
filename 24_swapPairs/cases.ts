import { ListNode } from './solution';

export const swapPairsTestCases = [
  {
    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))),
    expectedOutput: new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3)))),
  },
  {
    head: null,
    expectedOutput: null,
  },
  {
    head: new ListNode(1),
    expectedOutput: new ListNode(1),
  },
  {
    head: new ListNode(1, new ListNode(2)),
    expectedOutput: new ListNode(2, new ListNode(1)),
  },
  {
    head: new ListNode(1, new ListNode(2, new ListNode(3))),
    expectedOutput: new ListNode(2, new ListNode(1, new ListNode(3))),
  },
  {
    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
    expectedOutput: new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(5))))),
  },
];
