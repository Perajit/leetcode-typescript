/*
s="PAYPALISHIRING", numRows=3 => "PAHNAPLSIIGYIR"

P  A  H  N
AP LS II G
Y  I  R

N=14, groupSize = 4, numGroups = ceil(14 / 4) = 4
i=0, j=0 => out=s[0+0] = "P"
     j=1 => out="P" + s[0+4] = "PA"
     j=2 => out="PA" + s[0+8] = "PAH"
     j=3 => out="PAH" + s[0+12] = "PAHN"
i=1, j=0 => out=s[1+0] + s[4-1] = "AP"
     j=1 => out="AP" + s[1+4] + s[4-1+4] = "APLS"
     j=2 => out="APLS" + s[1+8] + s[4-1+8] = "APLSII"
     j=3 => out="APLSII" + s[1+12] + s[4-1+12] = "APLSIIG"
i=2, j=0 => out=s[0+2] = "Y"
     j=1 => out="Y" + s[4+2] = "YI"
     j=2 => out="YI" + s[8+2] = "YIR"
     j=3 => out="YIR" + s[12+2] = "YIR"
return "PAHNAPLSIIGYIR"
*/

/*
s="PAYPALISHIRING", numRows=4 => "PINALSIGYAHRPI"

P   I   N
A L S I G
YA  HR
P   I

N=14, groupSize=6, numGroups=ceil(14/6)=3
i=0, j=0 => out=s[0+0] = "P"
     j=1 => out="P" + s[0+6] = "PI"
     j=2 => out="PI" + s[0+12] = "PIN"
i=1, j=0 => out=s[1+0] + s[6-1+0] = "AL"
     j=1 => out="AL" + s[1+6] + s[6-1+6] = "ALSI"
     j=2 => out="ALSI" + s[1+12] + s[6-1+12] = "ALSIG"
i=2, j=0 => out=s[2+0] + s[6-2+0] = "YA"
     j=1 => out="YA" + s[2+6] + s[6-2+6] = "YAHR"
     j=2 => out="YAHR" + s[2+12] + s[6-2+12] = "YAHR"
i=3, j=0 => out=s[3+0] = "P"
     j=1 => out="P" + s[3+6] = "PI"
     j=2 => out="PI" + s[3+12] = "PI"
return "PINALSIGYAHRPI"
*/

export function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s;

  const groupSize = 2 * numRows - 2;
  const numGroups = Math.ceil(s.length / groupSize);
  let out = '';

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numGroups; j++) {
      out += s[i + (j * groupSize)] || '';

      // add char for diagonal only when not top and bottom
      if (i > 0 && i < numRows - 1) {
        out += s[groupSize - i + (j * groupSize)] || '';
      }
    }
  }

  return out;
}
