export const letterCombinationsTestCases = [
  {
    name: '#1',
    digits: '23',
    expectedOutput: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
  },
  {
    name: '#2',
    digits: '',
    expectedOutput: [],
  },
  {
    name: '#3',
    digits: '2',
    expectedOutput: ['a', 'b', 'c'],
  },
  {
    name: '#4',
    digits: '3',
    expectedOutput: ['d', 'e', 'f'],
  },
  {
    name: '#5',
    digits: '4',
    expectedOutput: ['g', 'h', 'i'],
  },
  {
    name: '#6',
    digits: '5',
    expectedOutput: ['j', 'k', 'l'],
  },
  {
    name: '#7',
    digits: '6',
    expectedOutput: ['m', 'n', 'o'],
  },
  {
    name: '#8',
    digits: '7',
    expectedOutput: ['p', 'q', 'r', 's'],
  },
  {
    name: '#9',
    digits: '8',
    expectedOutput: ['t', 'u', 'v'],
  },
  {
    name: '#10',
    digits: '9',
    expectedOutput: ['w', 'x', 'y', 'z'],
  },
  {
    name: '#11',
    digits: '22',
    expectedOutput: [
      'aa', 'ab', 'ac',
      'ba', 'bb', 'bc',
      'ca', 'cc', 'cb',
    ],
  },
  {
    name: '#12',
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
  name: string;
  digits: string;
  expectedOutput: string[];
}[];
