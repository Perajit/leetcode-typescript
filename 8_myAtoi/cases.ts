export const myAtoiTestCases = [
  { str: '', expectedOutput: 0 },
  { str: 'a', expectedOutput: 0 },
  { str: '0', expectedOutput: 0 },
  { str: '1', expectedOutput: 1 },
  { str: '-1', expectedOutput: -1 },
  { str: '-0100 10', expectedOutput: -100 },
  { str: '+0100 10', expectedOutput: 100 },
  { str: '42', expectedOutput: 42 },
  { str: '   +42', expectedOutput: 42 },
  { str: '   -42', expectedOutput: -42 },
  { str: '   -42 4', expectedOutput: -42 },
  { str: '   -42 -4', expectedOutput: -42 },
  { str: '   +0 123', expectedOutput: 0 },
  { str: '0-1', expectedOutput: 0 },
  { str: '+-100', expectedOutput: 0 },
  { str: 'words and 987', expectedOutput: 0 },
  { str: '4193 with words', expectedOutput: 4193 },
  { str: '4193 21 words 1', expectedOutput: 4193 },
  { str: '91283472332', expectedOutput: 2147483647 },
  { str: '-91283472332', expectedOutput: -2147483648 },
] as {
  str: string;
  expectedOutput: number;
}[];
