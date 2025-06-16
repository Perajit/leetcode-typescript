export const longestLengthSubstrTestCases = [
  { name: '#1', s: 'abcabcbb', expectedOutput: 3 }, // abc
  { name: '#2', s: 'bbbbb', expectedOutput: 1 }, // b
  { name: '#3', s: 'pwwkew', expectedOutput: 3 }, // wke
  { name: '#4', s: 'qwwerttttteeatopp', expectedOutput: 5 }, // eatop
  { name: '#5', s: 'dvdf', expectedOutput: 3 }, // vdf
  { name: '#6', s: 'ddddvdf', expectedOutput: 3 }, // vdf
  { name: '#7', s: 'a', expectedOutput: 1 }, // a
  { name: '#8', s: '', expectedOutput: 0 },
] as {
  name: string;
  s: string;
  expectedOutput: number;
}[];
