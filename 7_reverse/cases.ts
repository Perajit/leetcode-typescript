export const reverseTestCases = [
  { x: 0, expectedOutput: 0 },
  { x: 1, expectedOutput: 1 },
  { x: -1, expectedOutput: -1 },
  { x: -10, expectedOutput: -1 },
  { x: 123, expectedOutput: 321 },
  { x: -123, expectedOutput: -321 },
  { x: 120, expectedOutput: 21 },
  { x: 1534236469, expectedOutput: 0 },
  { x: -8463847412, expectedOutput: -2147483648 },
  { x: 8463847412, expectedOutput: 0 },
] as {
  x: number;
  expectedOutput: number;
}[];
