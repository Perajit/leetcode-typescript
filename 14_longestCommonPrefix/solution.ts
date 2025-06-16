/*
strs=["flower","flow","flight"] => "fl"

i=0, c0="f", n=1, c="f" => prefix="f"
             n=2, c="f"
i=1, c0="l", n=1, c="l" => prefix="fl"
             n=2, c="l"
i=2, c0="o", n=1, c="o" => return "fl"
*/

export function longestCommonPrefix(strs: string[]): string {
  let prefix = '';

  // loop through strs, check if each ith char of nth string are the same
  for (let i = 0; i < strs[0].length; i++) {
    const c0 = strs[0][i];

    for (let n = 1; n < strs.length; n++) {
      if (strs[n][i] !== c0) return prefix;
    }

    // ith char of each string are all matched, update out
    prefix += c0;
  }

  return prefix;
}
