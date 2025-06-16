/*
s="{()[]}" => true

i=0, c="{" => expectedOpen=undefined => opens=["{"]
i=1, c="(" => expectedOpen=undefined => opens=["{","("]
i=2, c=")" => expectedOpen="(", actualOpen="(" => open=["{"]
i=3, c="[" => expectedOpen=undefined => opens=["{","["]
i=4, c="]" => expectedOpen="[", actualOpen="[" => open=["{"]
i=5, c="}" => expectedOpen="{", actualOpen="{" => open=[]
return true
*/

/*
s="{(]}" => true

i=0, c="{" => expectedOpen=undefined => opens=["{"]
i=1, c="(" => expectedOpen=undefined => opens=["{","("]
i=2, c="]" => expectedOpen="]", actualOpen="("
return false
*/

const expectedOpens: Record<string, string> = {
  ')': '(',
  '}': '{',
  ']': '[',
};

export function isValid(s: string): boolean {
  const opens: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const expectedOpen = expectedOpens[s[i]];

    if (expectedOpen) {
      // check closing bracket
      const actualOpen = opens.pop();
      if (expectedOpen !== actualOpen) return false;
    } else {
      // add as pending bracket
      opens.push(s[i]);
    }
  }

  // if valid, there should be no pending brackets left
  return !opens.length;
}
