/*
s="babad" => "bab"

N=5
i=0, j=5, sub="babad" => palindrome=false, i=0, j=4, start=-1, end=-1
     j=4, sub="baba" => palindrome=false, i=0, j=3, start=-1, end=-1
     j=3, sub="bab" => palindrome=true => i=1, j=5, start=0, end=3
i=1, j=5, sub="abad" => palindrome=false => i=1, j=4, start=0, end=3
     j=4, sub="aba" => palindrome=true => i=2, j=5, start=0, end=3
i=2, j=5, sub="bad" => palindrome=false => i=2, j=4, start=0, end=3
     j=4, sub="ba" => palindrome=false => i=2, j=3, start=0, end=3 => N-i=3, end-start=3 => end loop
return s[0:3)="bab"
*/

/*
s = "cbbd" => "bb"

N=4
i=0, j = 4, sub="cbbd" => palindrome=false, i=0, j=3, start=-1, end=-1
     j = 3, sub="cbb" => palindrome=false, i=0, j=2, start=-1, end=-1
     j = 2, sub="cb" => palindrome=false, i=0, j=1, start=-1, end=-1
     j = 1, sub="c" => palindrome=true, i=1, j=4, start=0, end=1
i=1, j = 4, sub="bbd" => palindrome=false, i=1, j=3, start=0, end=1
     j = 3, sub="bb" => palindrome=true, i=2, j=4, start=1, end=3 => N-i=2, end-start=2 => end loop
return s[1:3)="bb"
*/

export function longestPalindrome(s: string): string {
  const N = s.length;

  if (N < 2) return s;

  let i = 0;
  let j = N;
  let start = 0;
  let end = 0;

  while (i < N && N - i > end - start) {
    // check sub and decrease in size if not palindrome
    if (isPalindrome(s, i, j)) {
      // if longer than prev state, update values
      if (j - i > end - start) {
        start = i;
        end = j;
      }

      // increase i and reset j
      i++;
      j = N;
    } else {
      j--;
    }
  }

  return s.slice(start, end);
}

export function isPalindrome(s: string, start: number, end: number): boolean {
  let i = start;
  let j = end;

  while (i < j) {
    if (s[i] !== s[j - 1]) return false;
    i++;
    j--;
  }

  return true;
}
