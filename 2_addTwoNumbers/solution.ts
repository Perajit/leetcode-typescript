
/*
l1=[2,4,3], l2=[5,6,4] => [7,0,8]

n1=2, n2=5, carry=0 => sum=7, node.val=7, carry=0, result=[7]
n2=4, n2=6, carry=0 => sum=10, node.val=0, carry=1, result=[7,0]
n1=3, n2=4, carry=1 => sum=8, node.val=8, carry=0, result=[7,0,8]
n1=null, n2=null, carry=0 => break
return [7,0,8]
*/

/*
l1=[0], l2=[0] => [0]

n1=0, n2=0, carry=0 => sum=0, node.val=0
*/

/*
l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] => [8,9,9,9,0,0,0,1]

n1=9, n2=9, carry=0 => sum=18, node.val=8, carry=1, result=[8]
n1=9, n2=9, carry=1 => sum=19, node.val=9, carry=1, result=[8,9]
n1=9, n2=9, carry=1 => sum=19, node.val=9, carry=1, result=[8,9,9]
n1=9, n2=9, carry=1 => sum=19, node.val=9, carry=1, result=[8,9,9,9]
n1=9, n2=null, carry=1 => sum=10, node.val=0, carry=1, result=[8,9,9,9,0]
n1=9, n2=null, carry=1 => sum=10, node.val=0, carry=1, result=[8,9,9,9,0,0]
n1=9, n2=null, carry=1 => sum=10, node.val=0, carry=1, result=[8,9,9,9,0,0,0]
n1=null, n2=null, carry=1 => sum=1, node.val=1, carry=0, result=[8,9,9,9,0,0,0,1]
n=null, n2=null, carry=0 => break
return [8,9,9,9,0,0,0,1]
*/

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) {
    return null;
  }

  const root = new ListNode();
  let node = root;
  let node1: ListNode | null = l1;
  let node2: ListNode | null = l2;
  let carry = 0;

  while (node1 || node2 || carry) {
    // prepare now node
    node.next = new ListNode();
    node = node.next;

    // calculate node.val and carry
    const sum = (node1?.val || 0) + (node2?.val || 0) + carry;
    node.val = sum % 10;
    carry = Math.floor(sum / 10);

    // next iteration
    node1 = node1?.next || null;
    node2 = node2?.next || null;
  }

  // return value (skip the root node)
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
