export const isValidTestCases = [
  { s: '(', expectedOutput: false },
  { s: '{', expectedOutput: false },
  { s: '[', expectedOutput: false },
  { s: ')', expectedOutput: false },
  { s: '}', expectedOutput: false },
  { s: ']', expectedOutput: false },
  { s: '()', expectedOutput: true },
  { s: '{}', expectedOutput: true },
  { s: '[]', expectedOutput: true },
  { s: '()[]{}', expectedOutput: true },
  { s: '(}', expectedOutput: false },
  { s: '([)]', expectedOutput: false },
  { s: '{()}', expectedOutput: true },
  { s: '{()[]}', expectedOutput: true },
] as {
  s: string;
  expectedOutput: boolean;
}[];
