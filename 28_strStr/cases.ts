export const strStrTestCases = [
  { haystack: '', needle: 'a', expectedOutput: -1 },
  { haystack: '', needle: '', expectedOutput: 0 },
  { haystack: 'hello', needle: 'll', expectedOutput: 2 },
  { haystack: 'aaaaa', needle: 'bba', expectedOutput: -1 },
  { haystack: 'aaaaaaaaaab', needle: 'b', expectedOutput: 10 },
  { haystack: 'mississippi', needle: 'pi', expectedOutput: 9 },
];
