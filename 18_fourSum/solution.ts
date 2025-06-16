export function fourSum(nums: number[], target: number): number[][] {
  const N = nums.length;
  if (N < 4) return [];

  // sort by value asc
  nums.sort((n1, n2) => n1 - n2);

  const out: number[][] = [];

  let i = 0;

  while (i < N - 3) {
    const ni = nums[i];
    let j = i + 1;

    while (j < N - 2) {
      const nj = nums[j];
      let k = j + 1;
      let d = N - 1;

      // collect all matched values of [nk, nd] for taken [ni, nj]
      while (k < d) {
        const nk = nums[k];
        const nd = nums[d];
        const diff = ni + nj + nk + nd - target;

        if (diff === 0) {
          // found match, collect result
          out.push([ni, nj, nk, nd]);
        }

        if (diff <= 0) {
          // found match or need higher value, move k forward until new number is found
          do k++;
          while (nums[k] === nk);
        }

        if (diff >= 0) {
          // found match or need lower value, move d backward until new number is found
          do d--;
          while (nums[d] === nd);
        }
      }

      // move j forward until the next value
      do j++;
      while (nums[j] === nj);
    }

    // avoid duplication, move i forward until the next value
    do i++;
    while (nums[i] === ni);
  }

  return out;
}
