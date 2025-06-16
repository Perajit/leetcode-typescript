import { ListNode } from './solution';

export const reverseKGroupTestCases = [
  {
    name: '#1',
    // [1,2,3,4,5]
    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
    k: 2,
    // [2,1,4,3,5]
    expectedOutput: new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(5))))),
  },
  {
    name: '#2',
    // [1,2,3,4,5]
    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
    k: 3,
    // [3,2,1,4.5]
    expectedOutput: new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(5))))),
  },
  {
    name: '#3',
    // [1,2,3,4,5,6,7,8]
    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8)))))))),
    k: 4,
    // [4,3,2,1,8,7,6,5]
    expectedOutput: new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(8, new ListNode(7, new ListNode(6, new ListNode(5)))))))),
  },
] as {
  name: string;
  head: ListNode | null;
  k: number;
  expectedOutput: ListNode | null;
}[];
