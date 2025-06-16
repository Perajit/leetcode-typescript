/*
n=3 => ["((()))","(()())","(())()","()(())","()()()"]

backtack(3,"",0,0)
  backtrack(3,"(",1,0)
    backtrack(3,"((",2,0)
      backtrack(3,"(((",3,0)
        backtrack(3,"((()",3,1)
          backtrack(3,"((())",3,2)
          backtrack(3,"((()))",3,3) => out.push("((()))")
      backtrack(3,"(()",2,1)
        backtrack(3,"(()(",3,1)
          backtrack(3,"(()()",3,2)
            backtrack(3,"(()())",3,3) => out.push("(()())")
        backtrack(3,"(())",2,2)
          backtrack(3,"(())(",3,2)
            backtrack(3,"(())()",3,3) => out.push("(())()")
    backtrack(3,"()",1,1)
      backtrack(3,"()(",2,1)
        backtrack(3,"()((",3,1)
          backtrack(3,"()(()",3,2)
          backtrack(3,"()(())",3,3) => out.push("()(())")
        backtrack(3,"()()",2,2)
          backtrack(3,""()()(",3,2)
            backtrack(3,"()()()",3,3) => out.push("()()()")
*/

export function generateParentheses(n: number): string[] {
  const out: string[] = [];
  backtack(n, '', 0, 0, out);
  return out;
}

function backtack(n: number, s: string, openCount: number, closeCount: number, out: string[]) {
  if (openCount === n && closeCount === n) {
    out.push(s);
    return;
  }

  // track all possible results when next char is open bracket
  if (openCount < n) {
    backtack(n, s + '(', openCount + 1, closeCount, out);
  }

  // track all possible results when next char as close bracket
  if (openCount > closeCount) {
    backtack(n, s + ')', openCount, closeCount + 1, out);
  }
}
