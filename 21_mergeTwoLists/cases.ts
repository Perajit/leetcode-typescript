import { ListNode } from './solution';

export const testCases = [
  {
    name: '#1',
		// [1,2,4]
    l1: new ListNode(1, new ListNode(2, new ListNode(4))),
		// [1,3,4]
    l2: new ListNode(1, new ListNode(3, new ListNode(4))),
		// [1,1,2,3,4,4]
    expectedOutput: new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))),
  },
  {
    name: '#2',
		// [1,2,3]
    l1: new ListNode(1, new ListNode(2, new ListNode(3))),
		// [2,3,4]
    l2: new ListNode(2, new ListNode(3, new ListNode(4))),
		// [1,2,2,3,3,4]
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4)))))),
  },
  {
    name: '#3',
    // [1,4,5]
    l1: new ListNode(1, new ListNode(4, new ListNode(5))),
    // [2,3,4]
    l2: new ListNode(2, new ListNode(3, new ListNode(4))),
    // [1,2,3,4,4,5]
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))),
  },
  {
    name: '#4',
    // [1,4,5]
    l1: new ListNode(1, new ListNode(4, new ListNode(5))),
    // [2,3]
    l2: new ListNode(2, new ListNode(3)),
    // [1,2,3,4,5]
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
  },
  {
    name: '#5',
    // [1,4]
    l1: new ListNode(1, new ListNode(4)),
    // [2,3,5]
    l2: new ListNode(2, new ListNode(3, new ListNode(5))),
    // [1,2,3,4,5]
    expectedOutput: new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
  },
  {
    name: '#6',
    l1: new ListNode(1),
    l2: null,
    expectedOutput: new ListNode(1),
  },
  {
    name: '#7',
    l1: null,
    l2: new ListNode(2),
    expectedOutput: new ListNode(2),
  },
  {
    name: '#8',
    l1: null,
    l2: null,
    expectedOutput: null,
  },
] as {
  name: string;
  l1: ListNode | null;
  l2: ListNode | null;
  expectedOutput: ListNode | null;
}[];
