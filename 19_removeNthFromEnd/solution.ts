export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;

  // collect all nodes to get the size
  const collection: ListNode[] = [];
  let node: ListNode | null = head;

  while (node) {
    collection.push(node);
    node = node.next || null;
  }

  const index = collection.length - n;

  if (index === 0) {
    return head?.next || null;
  }

  collection[index - 1].next = collection[index + 1] || null;

  return head;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
