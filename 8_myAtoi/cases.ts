export const myAtoiTestCases = [
  { name: '#1', str: '', expectedOutput: 0 },
  { name: '#2', str: 'a', expectedOutput: 0 },
  { name: '#3', str: '0', expectedOutput: 0 },
  { name: '#4', str: '1', expectedOutput: 1 },
  { name: '#5', str: '-1', expectedOutput: -1 },
  { name: '#6', str: '-0100 10', expectedOutput: -100 },
  { name: '#7', str: '+0100 10', expectedOutput: 100 },
  { name: '#8', str: '42', expectedOutput: 42 },
  { name: '#9', str: '   +42', expectedOutput: 42 },
  { name: '#10', str: '   -42', expectedOutput: -42 },
  { name: '#11', str: '   -42 4', expectedOutput: -42 },
  { name: '#12', str: '   -42 -4', expectedOutput: -42 },
  { name: '#13', str: '   +0 123', expectedOutput: 0 },
  { name: '#14', str: '0-1', expectedOutput: 0 },
  { name: '#15', str: '+-100', expectedOutput: 0 },
  { name: '#16', str: 'words and 987', expectedOutput: 0 },
  { name: '#17', str: '4193 with words', expectedOutput: 4193 },
  { name: '#18', str: '4193 21 words 1', expectedOutput: 4193 },
  { name: '#19', str: '91283472332', expectedOutput: 2147483647 },
  { name: '#20', str: '-91283472332', expectedOutput: -2147483648 },
] as {
  name: string;
  str: string;
  expectedOutput: number;
}[];
