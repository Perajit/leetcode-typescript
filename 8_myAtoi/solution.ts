/*
s=" -042" => -42

i=0, sub=" -042", c=" " => out=(0*10)+0=0
i=1, sub="-042", c="-" => out=(0*10)+0=0
i=2, sub="042", c="0" => out=(0*10)+0=0
i=3, sub="42", c="4" => out=(0*10)+4=4
i=3, sub="2", c="2" => out=(4*10)+2=42
return -1*42
*/

const min = -2147483648;
const max = 2147483647;
const numVals: Record<string, number> = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
};
const signVals: Record<string, number> = {
  '+': 1,
  '-': -1,
};

export function myAtoi(s: string): number {
  let out = 0;
  let i = 0;
  let sign = undefined;
  let started = false;

  while (i < s.length) {
    const c = s[i];
    const n = numVals[c];

    if (n !== undefined) {
      // continue conversion
      started = true;
      out = (out * 10) + n;
    } else if (!started) {
      // check padding and sign, return 0 if invalid char is found
      sign = signVals[c];

      if (sign) {
        started = true;
      } else if (c !== ' ') {
        return 0;
      }
    } else {
      // stop conversion if invalid char is found after started
      break;
    }

    i++;
  }

  out *= (sign || 1);

  if (out < min) return min;
  if (out > max) return max;

  return out;
}
