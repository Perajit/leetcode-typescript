/*
nums=[1,1] => [1]

i=0, j=1 => ni=1, nj=1 => nums=[1,1], j=2
return 1
*/

/*
nums=[1,1,2,3] => [1,2,3]

i=0, j=1 => ni=1, nj=1 => nums=[1,1,2,3], j=2
     j=2 => ni=1, nj=2 => nums=[1,2,1,3], i=1, j=3 // swap n1,n2
i=1, j=3 => ni=2, nj=3 => nums=[1,2,3,1], i=2, j=4 // swap n2,n3
return 3
*/

/*
nums=[-1,0,0,0,0,3,3] => [-1,0,3]

i=0, j=1 => ni=-1, nj=0 => nums=[-1,0,0,0,0,3,3], i=1, j=2 // swap n1,n1
i=1, j=2 => ni=0, nj=0 => nums=[-1,0,0,0,0,3,3], j=3
     j=3 => ni=0, nj=0 => nums=[-1,0,0,0,0,3,3], j=4
     j=4 => ni=0, nj=0 => nums=[-1,0,0,0,0,3,3], j=5
     j=5 => ni=0, nj=3 => nums=[-1,0,3,0,0,0,3], i=2, j=6 // swap n2,n5
i=2, j=6 => ni=3, nj=3 => nums=[-1,0,3,0,0,0,3], j=7
return 3
*/

/*
nums=[0,0,1,1,1,2,2,3,3,4] => [0,1,2,3,4]

N=10
i=0, j=1 => ni=0, nj=0 => nums=[0,0,1,1,1,2,2,3,3,4], j=2
     j=2 => ni=0, nj=1 => nums=[0,1,0,1,1,2,2,3,3,4], i=1, j=3 // swap n1,n2
i=1, j=3 => ni=1, nj=1 => nums=[0,1,0,1,1,2,2,3,3,4], j=4
     j=4 => ni=1, nj=1 => nums=[0,1,0,1,1,2,2,3,3,4], j=5
     j=5 => ni=1, nj=2 => nums=[0,1,2,1,1,0,2,3,3,4], i=2, j=6 // swap n2,n5
i=2, j=6 => ni=2, nj=2 => j=7
     j=7 => ni=2, nj=3 => nums=[0,1,2,3,1,2,1,3,4], i=3, j=8 // swap n3,n7
i=3, j=8 => ni=3, nj=3 => j=9
     j=9 => ni=3, nj=4 => nums=[0,1,2,3,4,2,1,3,1], i=4, j=10 // swap n4,n9
return 5
*/

export function removeDuplicates(nums: number[]): number {
  const N = nums.length;
  if (N < 2) return N;

  let i = 0;
  let j = 1;

  while (i < N && j < N) {
    // increase j until greater value
    while (nums[i] >= nums[j]) j++;

    if (j < N) {
      // swap nums[i+1], nums[j]
      const buffer = nums[i + 1];
      nums[i + 1] = nums[j];
      nums[j] = buffer;
    } else {
      break;
    }

    // update for next iteration
    i++;
    j++;
  }

  return i + 1;
}
