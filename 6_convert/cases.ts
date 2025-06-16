export const convertTestCases = [
  { s: '', numRows: 2, expectedOutput: '' },
  { s: 'A', numRows: 1, expectedOutput: 'A' },
  { s: 'AB', numRows: 3, expectedOutput: 'AB' },
  { s: 'AB', numRows: 1, expectedOutput: 'AB' },
  { s: 'ABC', numRows: 2, expectedOutput: 'ACB' },
  { s: 'PAYPALISHIRING', numRows: 0, expectedOutput: '' },
  { s: 'PAYPALISHIRING', numRows: 1, expectedOutput: 'PAYPALISHIRING' },
  { s: 'PAYPALISHIRING', numRows: 2, expectedOutput: 'PYAIHRNAPLSIIG' },
  { s: 'PAYPALISHIRING', numRows: 3, expectedOutput: 'PAHNAPLSIIGYIR' },
  { s: 'PAYPALISHIRING', numRows: 4, expectedOutput: 'PINALSIGYAHRPI' },
  { s: 'PAYPALISHIRING', numRows: 5, expectedOutput: 'PHASIYIRPLIGAN' },
] as {
  s: string;
  numRows: number;
  expectedOutput: string;
}[];
