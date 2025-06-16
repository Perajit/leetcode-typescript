export const convertTestCases = [
  { name: '#1', s: '', numRows: 2, expectedOutput: '' },
  { name: '#2', s: 'A', numRows: 1, expectedOutput: 'A' },
  { name: '#3', s: 'AB', numRows: 3, expectedOutput: 'AB' },
  { name: '#4', s: 'AB', numRows: 1, expectedOutput: 'AB' },
  { name: '#5', s: 'ABC', numRows: 2, expectedOutput: 'ACB' },
  { name: '#6', s: 'PAYPALISHIRING', numRows: 0, expectedOutput: '' },
  { name: '#7', s: 'PAYPALISHIRING', numRows: 1, expectedOutput: 'PAYPALISHIRING' },
  { name: '#8', s: 'PAYPALISHIRING', numRows: 2, expectedOutput: 'PYAIHRNAPLSIIG' },
  { name: '#9', s: 'PAYPALISHIRING', numRows: 3, expectedOutput: 'PAHNAPLSIIGYIR' },
  { name: '#10', s: 'PAYPALISHIRING', numRows: 4, expectedOutput: 'PINALSIGYAHRPI' },
  { name: '#11', s: 'PAYPALISHIRING', numRows: 5, expectedOutput: 'PHASIYIRPLIGAN' },
] as {
  name: string;
  s: string;
  numRows: number;
  expectedOutput: string;
}[];
