/*
x=121 => true

i=0, nextX=121, n=1 => nums=[1], nextX=120/10=12
i=1, nextX=12, n=2 => nums=[1,2], nextX=10/10=1
i=2, nextX=1, n=1 => nums=[1,2,1], nextX=10/10=1
return true
*/

export function isPalindrome(x: number): boolean {
  // negative integer can't be palindrom
  if (x < 0) return false;
  if (x < 10) return true;

  // collect values in each index
  const nums: number[] = [];
  let nextX = x;

  while (nextX > 0) {
    const n = nextX % 10;
    nums.push(n);
    nextX = (nextX - n) / 10;
  }

  // loop to check palindrome condition
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[i] !== nums[j]) return false;
    i++;
    j--;
  }

  return true;
}
