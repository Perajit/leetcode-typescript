/*
nums=[-2,-1,-1,-1,0,1,1]

sorted = [-2,-1,-1,-1,0,1,1], N = 7
a=0, b=1, c=6, na=-2, nb=-1, nc=1 => sum=-2 => out=[], b=4
     b=4, c=6, na=-2, nb=0, nc=1 => sum=-1 => out=[], b=5
     b=5, c=6, na=-2, nb=1, nc=1 => sum=-1 => out=[[-2,1,1]], b=6
a=1, b=2, c=6, na=-1, nb=-1, nc=1 => sum=-1 => out=[[-2,1,1]], b=4
     b=4, c=6, na=-1, nb=0, nc=1 => sum=-1 => out=[[-2,1,1], [-1,0,1]], b=5
     b=5, c=6, na=-1, nb=1, nc=1 => sum=1 => out=[[-2,1,1], [-1,0,1]], c=5
a=4, b=5, c=6, na=0, nb=1, nc=1 => sum=2 => out=[[-2,1,1], [-1,0,1]], b=6, c=5
return [[-2,1,1], [-1,0,1]]
*/

export function threeSum(nums: number[]): number[][] {
  const N = nums.length;

  if (N < 3) return [];

  // sort by value asc
  nums.sort((n1, n2) => n1 - n2);

  const out: number[][] = [];
  let a = 0;

  while (a < N - 2) {
    const na = nums[a];
    let b = a + 1;
    let c = N - 1;

    // collect all matched values of [nb, nc] for taken na
    while (b < c) {
      const nb = nums[b];
      const nc = nums[c];
      const sum = na + nb + nc;

      if (sum === 0) {
        // found match, collect result
        out.push([na, nb, nc]);
      }

      if (sum <= 0) {
        // found match or need higher value, move b forward until new number is found
        do b++;
        while (nums[b] === nb);
      }

      if (sum >= 0) {
        // found match or need lower value, move c backward until new number is found
        do c--;
        while (nums[c] === nc);
      }
    }

    // avoid duplication, move a forward until new number is found
    do a++;
    while (nums[a] === na);
  }

  return out;
}
