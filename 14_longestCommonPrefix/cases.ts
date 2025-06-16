export const longestCommonPrefixTestCases = [
  { name: '#1', strs: [''], expectedOutput: '' },
  { name: '#2', strs: ['happy', 'happy'], expectedOutput: 'happy' },
  { name: '#3', strs: ['flower', 'flow', 'flight'], expectedOutput: 'fl' },
  { name: '#4', strs: ['dog', 'racecar', 'car'], expectedOutput: '' },
] as {
  name: string;
  strs: string[];
  expectedOutput: string;
}[];
