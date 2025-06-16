export const strStrTestCases = [
  { name: '#1', haystack: 'hello', needle: 'll', expectedOutput: 2 },
  { name: '#2', haystack: 'aaaaa', needle: 'bba', expectedOutput: -1 },
  { name: '#3', haystack: '', needle: '', expectedOutput: 0 },
  { name: '#4', haystack: 'a', needle: '', expectedOutput: 0 },
  { name: '#5', haystack: '', needle: 'a', expectedOutput: -1 },
  { name: '#6', haystack: 'a', needle: 'a', expectedOutput: 0 },
  { name: '#7', haystack: 'abc', needle: 'c', expectedOutput: 2 },
  { name: '#8', haystack: 'mississippi', needle: 'pi', expectedOutput: 9 },
  { name: '#9', haystack: 'mississippi', needle: 'issipi', expectedOutput: -1 },
] as {
  name: string;
  haystack: string;
  needle: string;
  expectedOutput: number;
}[];
