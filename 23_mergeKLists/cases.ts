import { ListNode } from './solution';

export const mergeKListsTestCases = [
  {
    name: '#1',
    // [1,4,5], [1,3,4], [2,6]
    lists: [
      new ListNode(1, new ListNode(4, new ListNode(5))),
      new ListNode(1, new ListNode(3, new ListNode(4))),
      new ListNode(2, new ListNode(6)),
    ],
    // [1,1,2,3,4,5,6]
    expectedOutput: new ListNode(
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
    name: '#2',
    lists: [new ListNode(1, new ListNode(4, new ListNode(5)))],
    expectedOutput: new ListNode(1, new ListNode(4, new ListNode(5))),
  },
  {
    name: '#3',
    lists: [],
    expectedOutput: null,
  },
  {
    name: '#4',
    lists: [null],
    expectedOutput: null,
  },
] as {
  name: string;
  lists: (ListNode | null)[];
  expectedOutput: ListNode | null;
}[];
