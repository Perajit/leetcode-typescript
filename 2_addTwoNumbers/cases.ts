import { ListNode } from './solution';

export const addTowNumbersTestCases = [
  {
    l1: new ListNode(),                                                 // 0
    l2: new ListNode(),                                                 // 0
    expectedOutput: new ListNode(),                                     // 0
  },
  {
    l1: new ListNode(2, new ListNode(4, new ListNode(3))),              // 342
    l2: new ListNode(5, new ListNode(6, new ListNode(4))),              // 465
    expectedOutput: new ListNode(7, new ListNode(0, new ListNode(8))),  // 807
  },
  {
    l1: new ListNode(9, new ListNode(5, new ListNode(1))),              // 159
    l2: new ListNode(4, new ListNode(8)),                               // 84
    expectedOutput: new ListNode(3, new ListNode(4, new ListNode(2))),  // 243
  },
  {
    l1: new ListNode(5),                                                // 5
    l2: new ListNode(5),                                                // 5
    expectedOutput: new ListNode(0, new ListNode(1)),                   // 10
  },
  {
    l1: null,                                                           // 0
    l2: new ListNode(1),                                                // 1
    expectedOutput: new ListNode(1),                                    // 1
  },
  {
    l1: null,                                                           // 0
    l2: null,                                                           // 0
    expectedOutput: null,                                               // 0
  },
] as {
  l1: ListNode | null;
  l2: ListNode | null;
  expectedOutput: ListNode | null;
}[];
