/*
x=123 => 321

abX = 123
i=1 => vi=123 % 10=3,  => out=(0*10)+3=3, nextX=120/10=12
i=2 => vi=12 % 10=2 => out=(3*10)+2=32, nextX=10/10=1
i=3 => vi=1 % 10=1 => out=(32*10)+1 = 321, nextX=0
return 321
*/

const min = -2147483648;
const max = 2147483647;

export function reverse(x: number): number {
  const abX = Math.abs(x);
  let nextX = abX;
  let out = 0;

  while (nextX) {
    // vi is the value of current smallest order
    const vi = nextX % 10;

    // increase order of prev out value and add vi
    out = (out * 10) + vi;

    // nextX is from remaining and increase order
    nextX = (nextX - vi) / 10;
  }

  if (x < 0) out *= -1;
  if (out < min || out > max) return 0;

  return out;
}
