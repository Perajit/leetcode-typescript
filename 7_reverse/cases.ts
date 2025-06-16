export const reverseTestCases = [
  { name: '#1', x: 0, expectedOutput: 0 },
  { name: '#2', x: 1, expectedOutput: 1 },
  { name: '#3', x: -1, expectedOutput: -1 },
  { name: '#4', x: -10, expectedOutput: -1 },
  { name: '#5', x: 123, expectedOutput: 321 },
  { name: '#6', x: -123, expectedOutput: -321 },
  { name: '#7', x: 120, expectedOutput: 21 },
  { name: '#8', x: 1534236469, expectedOutput: 0 },
  { name: '#9', x: -8463847412, expectedOutput: -2147483648 },
  { name: '#10', x: 8463847412, expectedOutput: 0 },
] as {
  name: string;
  x: number;
  expectedOutput: number;
}[];
