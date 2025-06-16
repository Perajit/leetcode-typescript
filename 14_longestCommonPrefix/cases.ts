export const longestCommonPrefixTestCases = [
  { strs: [''], expectedOutput: '' },
  { strs: ['happy', 'happy'], expectedOutput: 'happy' },
  { strs: ['flower', 'flow', 'flight'], expectedOutput: 'fl' },
  { strs: ['dog', 'racecar', 'car'], expectedOutput: '' },
] as {
  strs: string[];
  expectedOutput: string;
}[];
