export const longestPalindromeTestCases = [
  {
    name: '#1',
    s: 'babad',
    expectedOutputs: ['aba', 'bab'],
  },
  {
    name: '#2',
    s: 'cbbd',
    expectedOutputs: ['bb'],
  },
  {
    name: '#3',
    s: '',
    expectedOutputs: [''],
  },
  {
    name: '#4',
    s: 'a',
    expectedOutputs: ['a'],
  },
  {
    name: '#5',
    s: 'bb',
    expectedOutputs: ['bb'],
  },
  {
    name: '#6',
    s: 'abbcbb',
    expectedOutputs: ['bbcbb'],
  },
  {
    name: '#7',
    s: 'abadd',
    expectedOutputs: ['aba'],
  },
  {
    name: '#8',
    s: 'cocoachocolate',
    expectedOutputs: ['coc', 'oco'],
  },
  {
    name: '#9',
    s: 'mochacappuppacahcom',
    expectedOutputs: ['mochacappuppacahcom'],
  },
  {
    name: '#10',
    s: 'crabbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbbbbbba',
    expectedOutputs: ['abbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbbbbbba'],
  },
  {
    name: '#11',
    s: 'have a nice day yad ecin a evah',
    expectedOutputs: ['have a nice day yad ecin a evah'],
  },
] as {
  name: string;
  s: string;
  expectedOutputs: string[];
}[];

export const isPalindromeTestCases = [
  // ''
  { name: '#1', s: '', start: 0, end: 1, expectedOutput: true },
  { name: '#2', s: 'a', start: 0, end: 0, expectedOutput: true },
  // a
  { name: '#3', s: 'a', start: 0, end: 1, expectedOutput: true },
  { name: '#4', s: 'abc', start: 0, end: 1, expectedOutput: true },
  { name: '#5', s: 'cab', start: 1, end: 2, expectedOutput: true },
  { name: '#6', s: 'cba', start: 2, end: 3, expectedOutput: true },
  // bb
  { name: '#7', s: 'bb', start: 0, end: 2, expectedOutput: true },
  // bbabb
  { name: '#8', s: 'bbabb', start: 0, end: 5, expectedOutput: true },
  // bbaabb
  { name: '#9', s: 'bbaabb', start: 0, end: 6, expectedOutput: true },
  // abbcbba
  { name: '#10', s: 'abbcbba', start: 0, end: 7, expectedOutput: true },
  { name: '#11', s: 'abbcbbacd', start: 0, end: 7, expectedOutput: true },
  { name: '#12', s: 'aaabbcbba', start: 2, end: 9, expectedOutput: true },
  { name: '#13', s: 'aaabbcbbacc', start: 2, end: 9, expectedOutput: true },
  // abbcdbba
  { name: '#14', s: 'abbcdbba', start: 0, end: 8, expectedOutput: false },
  // bbabbb
  { name: '#15', s: 'bbabbb', start: 0, end: 6, expectedOutput: false },
  { name: '#16', s: 'acbbabbbccd', start: 2, end: 8, expectedOutput: false },
  // aabb
  { name: '#17', s: 'aabb', start: 0, end: 4, expectedOutput: false },
  { name: '#18', s: 'aaabbcd', start: 1, end: 5, expectedOutput: false },
  // aaa
  { name: '#19', s: 'aaabbcd', start: 0, end: 3, expectedOutput: true },
] as {
  name: string;
  s: string;
  start: number;
  end: number;
  expectedOutput: boolean;
}[];
