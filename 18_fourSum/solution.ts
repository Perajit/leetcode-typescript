export function fourSum(nums: number[], target: number): number[][] {
  const N = nums.length;
  if (N < 4) return [];

  // sort by value asc
  nums.sort((n1, n2) => n1 - n2);

  const out: number[][] = [];

  let a = 0;

  while (a < N - 3) {
    const na = nums[a];
    let b = a + 1;

    while (b < N - 2) {
      const nb = nums[b];
      let c = b + 1;
      let d = N - 1;

      // collect all matched values of [nc, nd] for taken [na, nb]
      while (c < d) {
        const nc = nums[c];
        const nd = nums[d];
        const diff = na + nb + nc + nd - target;

        if (diff === 0) {
          // found match, collect result
          out.push([na, nb, nc, nd]);
        }

        if (diff <= 0) {
          // found match or need higher value, move c forward until new number is found
          do c++;
          while (nums[c] === nc);
        }

        if (diff >= 0) {
          // found match or need lower value, move d backward until new number is found
          do d--;
          while (nums[d] === nd);
        }
      }

      // move b forward until the next value
      do b++;
      while (nums[b] === nb);
    }

    // avoid duplication, move a forward until the next value
    do a++;
    while (nums[a] === na);
  }

  return out;
}
