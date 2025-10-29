import { ListNode } from "./solution";

export const removeNthFromEndTestCases = [
  {
    head: new ListNode(1),
    n: 1,
    expectedOutput: null,
  },
  {
    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),    // [1,2,3,4,5]
    n: 1,
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))),           // [1,2,3,4]
  },
  {
    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),    // [1,2,3,4,5]
    n: 2,
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5)))),           // [1,2,3,5]
  },
  {
    head: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),    // [1,2,3,4,5]
    n: 5,
    expectedOutput: new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),           // [2,3,4,5]
  },
] as {
  head: ListNode | null;
  n: number;
  expectedOutput: ListNode | null;
}[];
