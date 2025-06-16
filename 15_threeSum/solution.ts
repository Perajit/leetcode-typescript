/*
nums=[-2,-1,-1,-1,0,1,1]

sorted = [-2,-1,-1,-1,0,1,1], N = 7
i=0, j=1, k=6, ni=-2, nj=-1, nk=1 => sum=-2 => out=[], j=4
     j=4, k=6, ni=-2, nj=0, nk=1 => sum=-1 => out=[], j=5
     j=5, k=6, ni=-2, nj=1, nk=1 => sum=-1 => out=[[-2,1,1]], j=6
i=1, j=2, k=6, ni=-1, nj=-1, nk=1 => sum=-1 => out=[[-2,1,1]], j=4
     j=4, k=6, ni=-1, nj=0, nk=1 => sum=-1 => out=[[-2,1,1], [-1,0,1]], j=5
     j=5, k=6, ni=-1, nj=1, nk=1 => sum=1 => out=[[-2,1,1], [-1,0,1]], k=5
i=4, j=5, k=6, ni=0, nj=1, nk=1 => sum=2 => out=[[-2,1,1], [-1,0,1]], j=6, k=5
return [[-2,1,1], [-1,0,1]]
*/

export function threeSum(nums: number[]): number[][] {
  const N = nums.length;

  if (N < 3) return [];

  // sort by value asc
  nums.sort((n1, n2) => n1 - n2);

  const out: number[][] = [];
  let i = 0;

  while (i < N - 2) {
    const ni = nums[i];
    let j = i + 1;
    let k = N - 1;

    // collect all matched values of [nj, nk] for taken ni
    while (j < k) {
      const nj = nums[j];
      const nk = nums[k];
      const sum = nj + nk;

      if (sum === -ni) {
        // found match, collect result
        out.push([ni, nj, nk]);
      }

      if (sum <= -ni) {
        // found match or need higher value, move j forward until new number is found
        do j++;
        while (nums[j] === nj && j < N - 1);
      }

      if (sum >= -ni) {
        // found match or need lower value, move k backward until new number is found
        do k--;
        while (nums[k] === nk && k > 1);
      }
    }

    // avoid duplication, move i forward until new number is found
    do i++;
    while (nums[i] === ni);
  }

  return out;
}
