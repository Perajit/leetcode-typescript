export const generateParenthesesTestCases = [
  {
    name: '#1',
    n: 1,
    expectedOutput: ['()'],
  },
  {
    name: '#2',
    n: 2,
    expectedOutput: [
      '(())',
      '()()',
    ],
  },
  {
    name: '#3',
    n: 3,
    expectedOutput: [
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ],
  },
  {
    name: '#4',
    n: 4,
    expectedOutput: [
      // 1 group
      '(((())))',
      '((()()))',
      '((())())',
      '(()(()))',
      '(()()())',
      // 2 groups
      '(())(())',
      '((()))()',
      '()((()))',
      '(()())()',
      '()(()())',
      // 3 groups
      '(())()()',
      '()(())()',
      '()()(())',
      // 4 groups
      '()()()()',
    ],
  },
] as {
  name: string;
  n: number;
  expectedOutput: string[];
}[];
