export const letterCombinationsTestCases = [
  {
    digits: '23',
    expectedOutput: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
  },
  {
    digits: '',
    expectedOutput: [],
  },
  {
    digits: '2',
    expectedOutput: ['a', 'b', 'c'],
  },
  {
    digits: '3',
    expectedOutput: ['d', 'e', 'f'],
  },
  {
    digits: '4',
    expectedOutput: ['g', 'h', 'i'],
  },
  {
    digits: '5',
    expectedOutput: ['j', 'k', 'l'],
  },
  {
    digits: '6',
    expectedOutput: ['m', 'n', 'o'],
  },
  {
    digits: '7',
    expectedOutput: ['p', 'q', 'r', 's'],
  },
  {
    digits: '8',
    expectedOutput: ['t', 'u', 'v'],
  },
  {
    digits: '9',
    expectedOutput: ['w', 'x', 'y', 'z'],
  },
  {
    digits: '22',
    expectedOutput: [
      'aa', 'ab', 'ac',
      'ba', 'bb', 'bc',
      'ca', 'cc', 'cb',
    ],
  },
  {
    digits: '223',
    expectedOutput: [
      'aad', 'aae', 'aaf',
      'abd', 'abe', 'abf',
      'acd', 'ace', 'acf',
      'bad', 'bae', 'baf',
      'bbd', 'bbe', 'bbf',
      'bcd', 'bce', 'bcf',
      'cad', 'cae', 'caf',
      'cbd', 'cbe', 'cbf',
      'ccd', 'cce', 'ccf',
    ],
  },
] as {
  digits: string;
  expectedOutput: string[];
}[];
