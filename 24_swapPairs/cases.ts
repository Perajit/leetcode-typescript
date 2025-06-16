import { ListNode } from './solution';

export const swapPairsTestCases = [
  {
    name: '#1',
    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))),
    expectedOutput: new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3)))),
  },
  {
    name: '#2',
    head: null,
    expectedOutput: null,
  },
  {
    name: '#3',
    head: new ListNode(1),
    expectedOutput: new ListNode(1),
  },
  {
    name: '#4',
    head: new ListNode(1, new ListNode(2)),
    expectedOutput: new ListNode(2, new ListNode(1)),
  },
  {
    name: '#5',
    head: new ListNode(1, new ListNode(2, new ListNode(3))),
    expectedOutput: new ListNode(2, new ListNode(1, new ListNode(3))),
  },
  {
    name: '#6',
    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
    expectedOutput: new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(5))))),
  },
] as {
  name: string;
  head: ListNode | null;
  expectedOutput: ListNode | null;
}[];
