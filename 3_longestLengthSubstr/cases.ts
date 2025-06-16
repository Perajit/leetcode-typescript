export const longestLengthSubstrTestCases = [
  { s: 'abcabcbb', expectedOutput: 3 }, // abc
  { s: 'bbbbb', expectedOutput: 1 }, // b
  { s: 'pwwkew', expectedOutput: 3 }, // wke
  { s: 'qwwerttttteeatopp', expectedOutput: 5 }, // eatop
  { s: 'dvdf', expectedOutput: 3 }, // vdf
  { s: 'ddddvdf', expectedOutput: 3 }, // vdf
  { s: 'a', expectedOutput: 1 }, // a
  { s: '', expectedOutput: 0 },
] as {
  s: string;
  expectedOutput: number;
}[];
