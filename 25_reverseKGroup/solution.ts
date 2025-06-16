export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (k === 1) {
    return head;
  }

  const root = new ListNode(0, head);
  let node: ListNode | null = head;
  let prevNode: ListNode = root;

  while (node) {
    const groupNodes: (ListNode | null)[] = [];
    let groupNode: ListNode | null = node;
    let groupIndex = 0;

    while (groupNode && groupIndex < k) {
      groupNodes[groupIndex] = groupNode;
      groupNode = groupNode.next;
      groupIndex++;
    }

    if (groupIndex < k) {
      break;
    }

    for (let i = 0; i < k; i++) {
      groupNode = groupNodes[i]!;

      if (i === k - 1) {
        // last node of the group: link prev node to the node
        prevNode.next = groupNode;
      }

      if (i === 0) {
        // first node of the group: link the node to next node of new group
        groupNode.next = groupNodes[k - 1]!.next;
      } else {
        // default: reverse link
        groupNode.next = groupNodes[i - 1];
      }
    }

    // update for next iteration
    prevNode = groupNodes[0]!;
    node = prevNode.next;
  }

  return root.next;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
