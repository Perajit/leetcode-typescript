/*
nums=[3,3], val=5 => [3,3]

N=2, sorted=[3,3]
i=0, j=1 => ni=3 => i=1
i=1, j=1 => ni=3 => i=2
return 2
*/

/*
nums=[3,2,2,3], val=3 => [2,2]

N=4, sorted=[2,2,3,3]
i=0, j=3 => ni=2 => i=1
i=1, j=3 => ni=2 => i=2
i=2, j=3 => ni=3, nj=3
return 2,[2,2,3,3]
*/

/*
nums=[0,1,2,2,3,0,4,2], val=2 => [0,1,4,0,3]

N=8, sorted=[0,0,1,2,2,2,3,4]
i=0, j=7 => ni=0 => i=1
i=1, j=7 => ni=0 => i=2
i=2, j=7 => ni=1 => i=3
i=3, j=7 => ni=2, nj=4 => nums=[0,0,1,4,2,2,3,2], i=4, j=6
i=4, j=6 => ni=2, nj=3 => nums=[0,0,1,4,3,2,2,2], i=5, j=5
i=5, j=5 => ni=2, nj=2
return 5,[0,0,1,4,3,2,2,2]
*/

export function removeElement(nums: number[], val: number): number {
  const N = nums.length;
  if (N === 0) return 0;
  if (N === 1) return nums[0] !== val ? 1 : 0;

  nums.sort((n1, n2) => n1 - n2);

  let i = 0;
  let j = N - 1;

  while (i <= j) {
    const ni = nums[i];

    if (ni === val) {
      // swap nums[i], nums[j], or end loop if not possible
      if (nums[j] === val) break;

      nums[i] = nums[j];
      nums[j] = ni;

      // update j only after swap
      j--;
    }

    i++;
  }

  return i;
}
