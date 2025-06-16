export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const root = new ListNode();
  let node: ListNode | null = root;
  let node1: ListNode | null = list1;
  let node2: ListNode | null = list2;

  while (node1 || node2) {
    // take node1 if node1.val <= node2.val or no node2
    if (!node2 || (node1 && node2 && node1.val <= node2.val)) {
      node.next = node1!;
      node1 = node1?.next || null;
    } else {
      node.next = node2;
      node2 = node2.next || null;
    }

    node = node.next;
  }

  return root.next || null;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
