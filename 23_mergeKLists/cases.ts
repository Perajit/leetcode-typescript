import { ListNode } from './solution';

export const mergeKListsTestCases = [
  {
    lists: [
      new ListNode(1, new ListNode(4, new ListNode(5))),
      new ListNode(1, new ListNode(3, new ListNode(4))),
      new ListNode(2, new ListNode(6)),
    ],
    expectedOutput: new ListNode( // [1,1,2,3,4,5,6]
      1, new ListNode(
        1, new ListNode(
          2, new ListNode(
            3, new ListNode(
              4, new ListNode(
                4, new ListNode(
                  5, new ListNode(6),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  },
  {
    lists: [new ListNode(1, new ListNode(4, new ListNode(5)))],
    expectedOutput: new ListNode(1, new ListNode(4, new ListNode(5))),
  },
  {
    lists: [],
    expectedOutput: null,
  },
  {
    lists: [null],
    expectedOutput: null,
  },
];
