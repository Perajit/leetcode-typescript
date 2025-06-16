/*
s="XCVIII" => 98

i=0, c="I", v=1, prevV=0 => int=1+0=1
i=1, c="I", v=1, prevV=1 => int=1+1=2
i=2, c="I", v=1, prevV=1 => int=1+2=3
i=3, c="V", v=5, prevV=1 => int=5+3=8
i=4, c="C", v=100, prevV=5 => int=100+8=108
i=5, c="X", v=10, prevV=100 => int=100-10=98
return 98
*/

const symbolValues: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

export function romanToInt(s: string): number {
  let int = 0;
  let prevV = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const v = symbolValues[s[i]] || 0;

    if (v < prevV) {
      int -= v;
    } else {
      int += v;
    }

    prevV = v;
  }

  return int;
}
