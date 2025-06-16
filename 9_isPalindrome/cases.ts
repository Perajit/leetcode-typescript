export const isPalindromeTestCases = [
  { name: '#1', x: 0, expectedOutput: true },
  { name: '#2', x: 1, expectedOutput: true },
  { name: '#3', x: 11, expectedOutput: true },
  { name: '#4', x: 121, expectedOutput: true },
  { name: '#5', x: -121, expectedOutput: false },
  { name: '#6', x: 10, expectedOutput: false },
  { name: '#7', x: 101, expectedOutput: true },
  { name: '#8', x: 1001, expectedOutput: true },
  { name: '#9', x: 10011, expectedOutput: false },
] as {
  name: string;
  x: number;
  expectedOutput: boolean;
}[];
