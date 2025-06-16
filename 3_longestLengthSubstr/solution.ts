/*
s = "abcabcbb" => abc => 3

N=8
i=0, j=0, c="a", lastIndexOfC=undefined, => i=0, lastIndexByChar={"a":0} => sub="a", longest=1
i=0, j=1, c="b", lastIndexOfC=undefined, => i=0, lastIndexByChar={"a":0, "b":1} => sub="ab", longest=2
i=0, j=2, c="c", lastIndexOfC=undefined, => i=0, lastIndexByChar={"a":0, "b":1, "c":2} => sub="abc", longest=3
i=0, j=3, c="a", lastIndexOfC=0, => i=1, lastIndexByChar={"a":3, "b":1, "c":2} => sub="bca", longest=3
i=1, j=4, c="b", lastIndexOfC=1, => i=2, lastIndexByChar={"a":3, "b":4, "c":2} => sub="cab", longest=3
i=2, j=5, c="c", lastIndexOfC=2, => i=3, lastIndexByChar={"a":3, "b":4, "c":5} => sub="abc", longest=3
i=3, j=6, c="b", lastIndexOfC=4, => i=5, lastIndexByChar={"a":3, "b":6, "c":5} => sub"=cb", longest=3
i=5, j=7, c="b", lastIndexOfC=6, => i=7, lastIndexByChar={"a":3, "b":7, "c":5} => su"b=b", longest=3
return 3
*/

/*
s = "bbbbb" => b => 1

N=5
i=0, j=0, c="b", lastIndexOfC=undefined, => i=0, lastIndexByChar = {"b":0} => sub="b", longest=1
i=0, j=1, c="b", lastIndexOfC=0, => i=1, lastIndexByChar={"b":1} => sub="b", longest=1
i=1, j=2, c="b", lastIndexOfC=1, => i=2, lastIndexByChar={"b":2} => sub="b", longest=1
i=2, j=3, c="b", lastIndexOfC=2, => i=3, lastIndexByChar={"b":3} => sub="b", longest=1
i=3, j=4, c="b", lastIndexOfC=3, => i=4, lastIndexByChar={"b":4} => sub="b", longest=1
return 1
*/

/*
s = "pwwkew" => wke => 3

N=6
i=0, j=0, c="p", lastIndexOfC=undefined, => i=0, lastIndexByChar={"p":0} => sub="p", longest=1
i=0, j=1, c="w", lastIndexOfC=undefined, => i=0, lastIndexByChar={"p":0, "w":1} => sub="pw", longest=2
i=0, j=2, c="w", lastIndexOfC=1, => i=2, lastIndexByChar={"p":0, "w":2} => sub="w", longest=2
i=2, j=3, c="k", lastIndexOfC=undefined, => i=2, lastIndexByChar={"p":0, "w":2, "k":3} => sub="wk", longest=2
i=2, j=4, c="e", lastIndexOfC=undefined, => i=2, lastIndexByChar={"p":0, "w":2, "k":3, "e":4} => sub="wke", longest=3
i=2, j=5, c="e", lastIndexOfC=2, => i=3, lastIndexByChar={"p":0, "w":5, "k":3, "e":4} => sub="kew", longest=3
return 3
*/

/*
s = "qwwerttttteeatopp" => eatop => 5

N=17
i=0, j=0, c="q", lastIndexOfC=undefined, => i=0, lastIndexByChar={"q":0} => sub="q", longest=1
i=0, j=1, c="w", lastIndexOfC=undefined, => i=0, lastIndexByChar={"q":0, "w":1} => sub="qw", longest=2
i=0, j=2, c="w", lastIndexOfC=1, => i=2, lastIndexByChar={"q":0, "w":2} => sub="w", longest=2
i=2, j=3, c="e", lastIndexOfC=undefined, => i=2, lastIndexByChar={"q":0, "w":2, "e":3} => sub="we", longest=2
i=2, j=4, c="r", lastIndexOfC=undefined, => i=2, lastIndexByChar={"q":0, "w":2, "e":3, "r":4} => sub="wer", longest=3
i=2, j=5, c="t", lastIndexOfC=undefined, => i=2, lastIndexByChar={"q":0, "w":2, "e":3, "r":4, "t":5} => sub="wert", longest=4
i=2, j=6, c="t", lastIndexOfC=5, => i=6, lastIndexByChar={"q":0, "w":2, "e":3, "r":4, "t":6} => sub="t", longest=4
i=6, j=7, c="t", lastIndexOfC=6, => i=7, lastIndexByChar={"q":0, "w":2, "e":3, "r":4, "t":7} => sub="t", longest=4
i=7, j=8, c="t", lastIndexOfC=7, => i=8, lastIndexByChar={"q":0, "w":2, "e":3, "r":4, "t":8} => sub="t", longest=4
i=8, j=9, c="t", lastIndexOfC=8, => i=9, lastIndexByChar={"q":0, "w":2, "e":3, "r":4, "t":9} => sub="t", longest=4
i=9, j=10, c="e", lastIndexOfC=3, => i=9, lastIndexByChar={"q":0, "w":2, "e":10, "r":4, "t":9} => sub="te", longest=4
i=9, j=11, c="e", lastIndexOfC=10, => i=11, lastIndexByChar={"q":0, "w":2, "e":11, "r":4, "t":9} => sub="e", longest=4
i=11, j=12, c="a", lastIndexOfC=undefined, => i=11, lastIndexByChar={"q":0, "w":2, "e":11, "r":4, "t":9, "a":12} => sub="ea", longest=4
i=11, j=13, c="t", lastIndexOfC=9, => i=11, lastIndexByChar={"q":0, "w":2, "e":11, "r":4, "t":13, "a":12} => sub="eat", longest=4
i=11, j=14, c="o", lastIndexOfC=undefined, => i=11, lastIndexByChar={"q":0, "w":2, "e":11, "r":4, "t":13, "a":12, "o":14} => sub="eato", longest=4
i=11, j=15, c="p", lastIndexOfC=undefined, => i=11, lastIndexByChar={"q":0, "w":2, "e":11, "r":4, "t":13, "a":12, "o":14, "p":15} => sub="eatop", longest=5
i=11, j=16, c="p", lastIndexOfC=15, => i=16, lastIndexByChar={"q":0, "w":2, "e":11, "r":4, "t":13, "a":12, "o":14, "p":16} => sub="p", longest=5
return 5
*/

export function longestLengthSubstr(s: string): number {
  const N = s.length;
  if (N < 2) return N;

  const lastIndexByChar: Record<string, number> = {};
  let longest = 0;
  let i = 0;

  for (let j = 0; j < N; j++) {
    const c = s[j];

    // if duplicated with any char within s[i:j), move i to next index from last occurance
    if (lastIndexByChar[c] >= i) {
      i = lastIndexByChar[c] + 1;
    }

    // update last index of char to j
    lastIndexByChar[c] = j;

    // update longest
    longest = Math.max(longest, j - i + 1);
  }

  return longest;
}
