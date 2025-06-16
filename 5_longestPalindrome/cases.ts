export const longestPalindromeTestCases = [
  {
    s: 'babad',
    expectedOutputs: ['aba', 'bab'],
  },
  {
    s: 'cbbd',
    expectedOutputs: ['bb'],
  },
  {
    s: '',
    expectedOutputs: [''],
  },
  {
    s: 'a',
    expectedOutputs: ['a'],
  },
  {
    s: 'bb',
    expectedOutputs: ['bb'],
  },
  {
    s: 'abbcbb',
    expectedOutputs: ['bbcbb'],
  },
  {
    s: 'abadd',
    expectedOutputs: ['aba'],
  },
  {
    s: 'cocoachocolate',
    expectedOutputs: ['coc', 'oco'],
  },
  {
    s: 'mochacappuppacahcom',
    expectedOutputs: ['mochacappuppacahcom'],
  },
  {
    s: 'crabbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbbbbbba',
    expectedOutputs: ['abbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbbbbbbbbbbbbba'],
  },
  {
    s: 'have a nice day yad ecin a evah',
    expectedOutputs: ['have a nice day yad ecin a evah'],
  },
] as {
  s: string;
  expectedOutputs: string[];
}[];

export const isPalindromeTestCases = [
  // ''
  { s: '', start: 0, end: 1, expectedOutput: true },
  { s: 'a', start: 0, end: 0, expectedOutput: true },
  // a
  { s: 'a', start: 0, end: 1, expectedOutput: true },
  { s: 'abc', start: 0, end: 1, expectedOutput: true },
  { s: 'cab', start: 1, end: 2, expectedOutput: true },
  { s: 'cba', start: 2, end: 3, expectedOutput: true },
  // bb
  { s: 'bb', start: 0, end: 2, expectedOutput: true },
  // bbabb
  { s: 'bbabb', start: 0, end: 5, expectedOutput: true },
  // bbaabb
  { s: 'bbaabb', start: 0, end: 6, expectedOutput: true },
  // abbcbba
  { s: 'abbcbba', start: 0, end: 7, expectedOutput: true },
  { s: 'abbcbbacd', start: 0, end: 7, expectedOutput: true },
  { s: 'aaabbcbba', start: 2, end: 9, expectedOutput: true },
  { s: 'aaabbcbbacc', start: 2, end: 9, expectedOutput: true },
  // abbcdbba
  { s: 'abbcdbba', start: 0, end: 8, expectedOutput: false },
  // bbabbb
  { s: 'bbabbb', start: 0, end: 6, expectedOutput: false },
  { s: 'acbbabbbccd', start: 2, end: 8, expectedOutput: false },
  // aabb
  { s: 'aabb', start: 0, end: 4, expectedOutput: false },
  { s: 'aaabbcd', start: 1, end: 5, expectedOutput: false },
  // aaa
  { s: 'aaabbcd', start: 0, end: 3, expectedOutput: true },
] as {
  s: string;
  start: number;
  end: number;
  expectedOutput: boolean;
}[];
