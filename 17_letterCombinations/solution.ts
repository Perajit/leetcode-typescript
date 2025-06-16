/*
digits="23" => ["ad","ae","af","bd","be","bf","cd","ce","cf"]

i=0, letters="abc"
     j=0, k=0 => nextOut=["a"]
     j=1, k=0 => nextOut=["a","b"]
     j=2, k=0 => nextOut=["a","b","c"]
     => out=["a","b","c"]
i=1, letters="def"
     j=0, k=0 => nextOut=["ad","bd","cd"]
     j=1, k=0 => nextOut=["ad","bd","cd","ae","be","ce"]
     j=2, k=0 => nextOut=["ad","bd","cd","ae","be","ce","af","bf","cf"]
     => out=["ad","bd","cd","ae","be","ce","af","bf","cf"]
*/

const digitToLetters: Record<string, string[]> = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

export function letterCombinations(digits: string): string[] {
  const firstLetters = digitToLetters[digits[0]];
  if (!firstLetters) return [];

  let out: string[] = firstLetters;

  for (let di = 1; di < digits.length; di++) {
    const letters = digitToLetters[digits[di]];
    const nextOut: string[] = [];

    for (let li = 0; li < letters.length; li++) {
      for (let oi = 0; oi < out.length; oi++) {
        nextOut.push(out[oi] + letters[li]);
      }
    }

    out = nextOut;
  }

  return out;
}
