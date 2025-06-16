/*
height=[1,8,6,2,5,4,8,3,7] => 49

N=9
i=0, j=8, hi=1, hj=7, => a=(8-0)*1=8 => maxA=8, i=1
i=1, j=8, hi=8, hj=7, => a=(8-1)*7=49 => maxA=49, j=7
i=1, j=7, hi=8, hj=3, => a=(7-1)*3=18 => maxA=49, j=6
i=1, j=6, hi=8, hj=8, => a=(6-1)*8=40 => maxA=49, j=5
i=1, j=5, hi=8, hj=4, => a=(5-1)*4=16 => maxA=49, j=4
i=1, j=4, hi=8, hj=5, => a=(4-1)*5=15 => maxA=49, j=3
i=1, j=3, hi=8, hj=2, => a=(3-1)*2=4 => maxA=49, j=2
i=1, j=2, hi=8, hj=6, => a=(2-1)*6=6 => maxA=49, j=1
return 49
*/

/*
height=[1,10,2] => 2

N=3
i=0, j= 2, hi=1, hj=2, => a=(2-0)*1=2 => maxA=2, i=1
i=1, j= 2, hi=10, hj=2, => a=(2-1)*2=2 => maxA=2, j=1
return 2
*/

export function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let maxA = 0;

  while (i < j) {
    const hi = height[i];
    const hj = height[j];
    maxA = Math.max(maxA, (j - i) * Math.min(hi, hj));

    if (hi < hj) {
      i++;
    } else {
      j--;
    }
  }

  return maxA;
}
