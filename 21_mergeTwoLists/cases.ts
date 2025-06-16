import { ListNode } from "./solution";

export const testCases = [
  {
    l1: new ListNode(1, new ListNode(2, new ListNode(4))),
    l2: new ListNode(1, new ListNode(3, new ListNode(4))),
    expectedOutput: new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))),
  },
  {
    l1: new ListNode(1, new ListNode(2, new ListNode(3))),
    l2: new ListNode(2, new ListNode(3, new ListNode(4))),
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4)))))),
  },
  {
    l1: new ListNode(1, new ListNode(4, new ListNode(5))),
    l2: new ListNode(2, new ListNode(3, new ListNode(4))),
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))),
  },
  {
    l1: new ListNode(1, new ListNode(4, new ListNode(5))),
    l2: new ListNode(2, new ListNode(3, new ListNode(4))),
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))),
  },
  {
    l1: new ListNode(1, new ListNode(4, new ListNode(5))),
    l2: new ListNode(2, new ListNode(3)),
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
  },
  {
    l1: new ListNode(1, new ListNode(4)),
    l2: new ListNode(2, new ListNode(3, new ListNode(5))),
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
  },
  {
    l1: new ListNode(1),
    l2: null,
    expectedOutput: new ListNode(1),
  },
  {
    l1: null,
    l2: new ListNode(2),
    expectedOutput: new ListNode(2),
  },
  {
    l1: null,
    l2: null,
    expectedOutput: null,
  },
];
