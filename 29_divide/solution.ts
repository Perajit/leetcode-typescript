const MIN = -2147483648;
const MAX = 2147483647;

export function divide(dividend: number, divisor: number): number {
  const absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);

  if (absDividend < absDivisor) {
    return 0;
  }

  const memory = [[1, absDivisor]];

  let out = 0;
  let remaining = absDividend;

  while (remaining >= absDivisor) {
    let i = memory.length - 1;

    // update memory
    const [m, p] = memory[i];
    memory[++i] = [m + m, p + p];

    while (i > 0 && remaining < memory[i][1]) {
      i--;
    }

    out += memory[i][0];
    remaining -= memory[i][1];
  }

  if ((dividend < 0 && divisor >= 0) || (dividend >= 0 && divisor < 0)) {
    out = -out;
  }

  return out < MIN ? MIN : out > MAX ? MAX : out;
}

/*
10/3
#0  =>  out=0, remaining=10, memory=[[1,3]]                   =>  out=1, remaining=7, memory=[[1,3],[2,6]]
#1  =>  out=1, remaining=7, memory=[[1,3],[2,6]]              =>  out=3, remaining=1, memory=[[1,3],[2,6],[3,9]]
*/

