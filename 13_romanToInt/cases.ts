export const romanToIntTestCases = [
  { name: '#1', s: '', expectedOutput: 0 },
  { name: '#2', s: 'I', expectedOutput: 1 },
  { name: '#3', s: 'V', expectedOutput: 5 },
  { name: '#4', s: 'X', expectedOutput: 10 },
  { name: '#5', s: 'L', expectedOutput: 50 },
  { name: '#6', s: 'C', expectedOutput: 100 },
  { name: '#7', s: 'D', expectedOutput: 500 },
  { name: '#8', s: 'M', expectedOutput: 1000 },
  { name: '#9', s: 'IV', expectedOutput: 4 },
  { name: '#10', s: 'IX', expectedOutput: 9 },
  { name: '#11', s: 'XL', expectedOutput: 40 },
  { name: '#12', s: 'XC', expectedOutput: 90 },
  { name: '#13', s: 'CD', expectedOutput: 400 },
  { name: '#14', s: 'CM', expectedOutput: 900 },
  { name: '#15', s: 'III', expectedOutput: 3 },
  { name: '#16', s: 'VIII', expectedOutput: 8 },
  { name: '#17', s: 'XIII', expectedOutput: 13 },
  { name: '#18', s: 'XXXVIII', expectedOutput: 38 },
  { name: '#19', s: 'LXXXVIII', expectedOutput: 88 },
  { name: '#20', s: 'DCCCVIII', expectedOutput: 808 },
  { name: '#21', s: 'DCCCLXXXVIII', expectedOutput: 888 },
  { name: '#22', s: 'XIV', expectedOutput: 14 },
  { name: '#23', s: 'XIX', expectedOutput: 19 },
  { name: '#24', s: 'XLIX', expectedOutput: 49 },
  { name: '#25', s: 'CDIX', expectedOutput: 409 },
  { name: '#26', s: 'CMXCIX', expectedOutput: 999 },
  { name: '#27', s: 'MMMCMXCIX', expectedOutput: 3999 },
] as {
  name: string;
  s: string;
  expectedOutput: number;
}[];
