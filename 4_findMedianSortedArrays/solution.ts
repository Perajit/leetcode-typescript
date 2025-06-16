/*
nums1=[1,2], nums2=[3,4] => median([1,2,3,4]) => 2.5

N1=2, N2=2, M=2
i=0, j=0, n1=1, n2=3 => merged=[1], i=1, j=0
i=1, j=0, n1=2, n2=3 => merged=[1,2], i=2, j=0
i=2, j=0, n1=undefined, n2=3 => merged=[1,2,3], i=2, j=1
return (2+3)/2=2.5
*/

/*
nums1=[1,1,6], nums2=[2,2,4,6,8] => median([1,1,2,2,4,6,6,8]) => 3

N1=3, N2=5, M=4
i=0, j=0, n1=1, n2=2 => merged=[1], i=1, j=0
i=1, j=0, n1=1, n2=2 => merged=[1,1], i=2, j=0
i=2, j=0, n1=6, n2=2 => merged=[1,1,2], i=2, j=1
i=2, j=1, n1=6, n2=2 => merged=[1,1,2,2], i=2, j=2
i=2, j=2, n1=6, n2=4 => merged=[1,1,2,2,4], i=2, j=3
return (2+4)/2=3
*/

export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const N1 = nums1.length;
  const N2 = nums2.length;
  const M = Math.floor((N1 + N2) / 2);
  let i = 0;
  let j = 0;
  let count = 0;
  let val;
  let prevVal;

  while (i < N1 || j < N2) {
    // store prev value
    prevVal = val;

    // select n1 if n1 <= n2 including when nums2 is end, otherwise, select n2
    if ((i < N1 && j >= N2) || nums1[i] <= nums2[j]) {
      val = nums1[i];
      i++;
    } else {
      val = nums2[j];
      j++;
    }

    if (++count > M) break;
  }

  // for odd merged length, return latest value
  // for even merged length, return mean of latest value and prev value
  return (N1 + N2) % 2 ? (val || 0) : ((val || 0) + (prevVal || 0)) / 2;
}
