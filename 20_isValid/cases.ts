export const isValidTestCases = [
  { name: '#1', s: '(', expectedOutput: false },
  { name: '#2', s: '{', expectedOutput: false },
  { name: '#3', s: '[', expectedOutput: false },
  { name: '#4', s: ')', expectedOutput: false },
  { name: '#5', s: '}', expectedOutput: false },
  { name: '#6', s: ']', expectedOutput: false },
  { name: '#7', s: '()', expectedOutput: true },
  { name: '#8', s: '{}', expectedOutput: true },
  { name: '#9', s: '[]', expectedOutput: true },
  { name: '#10', s: '()[]{}', expectedOutput: true },
  { name: '#11', s: '(}', expectedOutput: false },
  { name: '#12', s: '([)]', expectedOutput: false },
  { name: '#13', s: '{()}', expectedOutput: true },
  { name: '#14', s: '{()[]}', expectedOutput: true },
] as {
  name: string;
  s: string;
  expectedOutput: boolean;
}[];
