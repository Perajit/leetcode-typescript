/*
nums=[1,1,1,2,8,8], target=8 => 10

sorted = [1,1,1,2,8,8], N = 6
a=0, b=1, c=5, na=1, nb=1, nc=8 => sum= 10, diff=2 => closestDiff=2, c=3
     b=1, c=3, na=1, nb=1, nc=2 => sum= 4, diff=-4 => closestDiff=2, b=3
a=3, b=4, c=5, na=2, nb=8, nc=8 => sum= 20, diff=12 => closestDiff=2, c=3
return 2+8
*/

export function threeSumClosest(nums: number[], target: number): number {
  const N = nums.length;
  let a = 0;
  let closestDiff = Infinity;

  // sort by value asc
  nums.sort((n1, n2) => n1 - n2);
  console.log({ nums, target });

  while (a < N - 2) {
    const na = nums[a];
    let b = a + 1;
    let c = N - 1;

    while (b < c) {
      const nb = nums[b];
      const nc = nums[c];
      const diff = na + nb + nc - target;

      if (Math.abs(diff) < Math.abs(closestDiff)) {
        closestDiff = diff;
      }

      // update pointers for next iteration
      if (diff < 0) {
        do b++;
        while (nums[b] === nb);
      } else if (diff > 0) {
        do c--;
        while (nums[c] === nc);
      } else {
        return target;
      }
    }

    // avoid duplication, move a forward until the next value
    do a++;
    while (nums[a] === na);
  }

  return closestDiff + target;
}
