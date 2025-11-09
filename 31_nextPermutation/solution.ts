export function nextPermutation(nums: number[]): void {
  const N = nums.length;

  if (N < 2) {
    return;
  }

	// find first index of asc order from last
  let n = Number.MIN_SAFE_INTEGER;
  let i = N - 1;

  for (; i >= 0; i--) {
    if (nums[i] < n) {
      break;
    }

    n = nums[i];
  }

  // for last permutation: next = first permutation
  if (i < 0) {
    reverse(nums, 0, N);
    return;
  }

  // find smallest value greater than nums[i] last
  let j = N - 1;

  for (; j > i; j--) {
    if (nums[j] > nums[i]) {
      break;
    }
  }

  // swap ni <-> nj and sort rhs asc (reverse)
  n = nums[i];
  nums[i] = nums[j];
  nums[j] = n;
  reverse(nums, i + 1, N);
}

export function reverse(nums: number[], start: number, end: number) {
  const bound = Math.floor((end - start) / 2);
  let offset = 0;

  for (; offset < bound; offset++) {
    const temp = nums[start + offset];
    nums[start + offset] = nums[end - 1 - offset];
    nums[end - 1 - offset] = temp;
  }
}
