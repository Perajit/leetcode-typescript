export const divideTestCases = [
  { name: '#1', dividend: 10, divisor: 3, expectedOutput: 3 },
  { name: '#2', dividend: 7, divisor: -3, expectedOutput: -2 },
  { name: '#3', dividend: -7, divisor: 3, expectedOutput: -2 },
  { name: '#4', dividend: -7, divisor: -3, expectedOutput: 2 },
  { name: '#5', dividend: 2, divisor: 3, expectedOutput: 0 },
  { name: '#6', dividend: 2, divisor: -3, expectedOutput: 0 },
  { name: '#7', dividend: 4294967296, divisor: 2, expectedOutput: 2147483647 },
  { name: '#8', dividend: 4294967298, divisor: -2, expectedOutput: -2147483648 },
  { name: '#9', dividend: -2147483648, divisor: 2, expectedOutput: -1073741824 },
] as {
  name: string;
  dividend: number;
  divisor: number;
  expectedOutput: number;
}[];