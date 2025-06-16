/*
nums=[1,1,1,2,8,8], target=8 => 10

sorted = [1,1,1,2,8,8], N = 6
i=0, j=1, k=5, ni=1, nj=1, nk=8 => sum= 10, diff=2 => closestDiff=2, k=3
     j=1, k=3, ni=1, nj=1, nk=2 => sum= 4, diff=-4 => closestDiff=2, j=3
i=3, j=4, k=5, ni=2, nj=8, nk=8 => sum= 20, diff=12 => closestDiff=2, k=3
return 2+8
*/

export function threeSumClosest(nums: number[], target: number): number {
  const N = nums.length;
  let i = 0;
  let closestDiff = Infinity;

  // sort by value asc
  nums.sort((n1, n2) => n1 - n2);

  while (i < N - 2) {
    const ni = nums[i];
    let j = i + 1;
    let k = N - 1;

    while (j < k) {
      const nj = nums[j];
      const nk = nums[k];
      const diff = ni + nj + nk - target;

      if (Math.abs(diff) < Math.abs(closestDiff)) {
        closestDiff = diff;
      }

      // update pointers for next iteration
      if (diff < 0) {
        do j++;
        while (nums[j] === nj);
      } else if (diff > 0) {
        do k--;
        while (nums[k] === nk);
      } else {
        return target;
      }
    }

    // avoid duplication, move i forward until the next value
    do i++;
    while (nums[i] === ni);
  }

  return closestDiff + target;
}
