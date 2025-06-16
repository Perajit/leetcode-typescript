export const isPalindromeTestCases = [
  { x: 0, expectedOutput: true },
  { x: 1, expectedOutput: true },
  { x: 11, expectedOutput: true },
  { x: 121, expectedOutput: true },
  { x: -121, expectedOutput: false },
  { x: 10, expectedOutput: false },
  { x: 101, expectedOutput: true },
  { x: 1001, expectedOutput: true },
  { x: 10011, expectedOutput: false },
] as {
  x: number;
  expectedOutput: boolean;
}[];
