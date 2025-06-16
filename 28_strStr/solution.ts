/*
haystack="hello", needle="ll" => 2

i=0, j=0 => h="h", n="l"
i=1, j=0 => h="e", n="l"
i=2, j=0 => h="l", n="l"
     j=1 => h="l", n="l"
return 2
*/

/*
haystack="aaaaa", needle="bba" => -1

i=0, j=0 => h="a", n="b"
i=1, j=0 => h="a", n="b"
i=2, j=0 => h="a", n="b"
i=3, j=0 => h="a", n="b"
i=4, j=0 => h="a", n="b"
return -1
*/

/*
haystack="mississippi", needle="pi" => 9

i=0, j=0 => h="m", n="p"
i=1, j=0 => h="i", n="p"
i=2, j=0 => h="s", n="p"
i=3, j=0 => h="s", n="p"
i=4, j=0 => h="i", n="p"
i=5, j=0 => h="s", n="p"
i=6, j=0 => h="s", n="p"
i=7, j=0 => h="i", n="p"
i=8, j=0 => h="p", n="p"
     j=1 => h="p", n="i"
i=9, j=0 => h="p", n="p"
     j=1 => h="i", n="i"
return 9
*/

export function strStr(haystack: string, needle: string): number {
  if (haystack.length <= needle.length) return haystack === needle ? 0 : -1;

  const endIndex = haystack.length - needle.length;
  let i = 0;

  while (i <= endIndex) {
    let matched = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        matched = false;
        break;
      }
    }

    if (matched) return i;

    i++;
  }

  return -1;
}
