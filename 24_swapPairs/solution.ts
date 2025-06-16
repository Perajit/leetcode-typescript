/*
head=[1,2,3,4] => [2,1,4,3]

root = [0,1,2,3,4]
i=0 => node0=[0,1,2,3,4] => node1=[1,2,3,4], node2=[2,3,4]
    => node1=[1,3,4] => node0=[0,1,3,4] // link node1 to the next one
    => node2=[2,1,3,4] => node0=[0,2,1,3,4], root=[0,2,1,3,4] // link node2 to node1 and link node to node2
    => node0=[1,3,4] // update node0 to node2.next
i=1 => node0=[1,3,4] => node1=[3,4], node2=[4]
    => node1=[3] => node0=[1,3]
    => node2=[4,3] => node0=[1,4,3], root=[0,2,1,4,3]
    => node0=null
return [2,1,4,3]
*/

/*
head=[1,2,3] => [2,1,3]

root = [0,1,2,3]
i=0 => node0=[0,1,2,3,4] => node1=[1,2,3], node2=[2,3]
    => node1=[1,3] => node0=[0,1,3]
    => node2=[2,1,3] => node0=[0,2,1,3], root=[0,2,1,3]
    => node0=[1,3]
i=1 => node0=[1,3] => node1=[3], node2=null
    => break, root=[0,2,1,3]
*/

export function swapPairs(head: ListNode | null): ListNode | null {
  const root = new ListNode(0, head);
  let node0: ListNode | null = root;

  while (node0) {
    const node1: ListNode | null = node0.next;
    const node2: ListNode | null = node1?.next || null;

    if (!node1 || !node2) break;

    // link node1 to node2's next node
    node1.next = node2.next || null;

    // link node2 to node1
    node2.next = node1;

    // link node0 to node2
    node0.next = node2 || null;

    // update for next iteration
    node0 = node2.next || null;
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
