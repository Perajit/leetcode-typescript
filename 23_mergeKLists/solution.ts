export function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const nodes = lists.slice(0);
  const root = new ListNode();
  let node: ListNode | null = root;

  while (node) {
    // get min from all list at current node
    let minIndex = 0;

    for (let i = 1; i < nodes.length; i++) {
      const iNode = nodes[i];
      const minNode = nodes[minIndex] || null;

      if ((iNode && !minNode) || (iNode && minNode && iNode.val < minNode.val)) {
        minIndex = i;
      }
    }

    // take min node out from corresponding list and collect
    if (nodes[minIndex]) {
      node.next = new ListNode(nodes[minIndex]?.val);
      nodes[minIndex] = nodes[minIndex]?.next || null;
    }

    node = node?.next || null;
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
