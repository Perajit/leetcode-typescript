export const generateParenthesesTestCases = [
  {
    n: 1,
    expectedOutput: ['()'],
  },
  {
    n: 2,
    expectedOutput: [
      '(())',
      '()()',
    ],
  },
  {
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
];
