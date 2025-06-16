/*
num=3749 => "MMMDCCXLIX"

i=0, nextNum=3749, mod=10, v=9 => roman="IX", nextNum=3740
i=1, nextNum=3740, mod=100, v=40 => roman="XLIX", nextNum=3700
i=2, nextNum=3700, mod=1000, v=700 => roman="DCCXLIX", nextNum=3000
i=2, nextNum=3000, mod=10000, v=3000 => roman="MMMDCCXLIX", nextNum=0
return "MMMDCCXLIX"
*/

const numToSymbol = new Map([
  [1, 'I'], [2, 'II'], [3, 'III'], [4, 'IV'], [5, 'V'], [6, 'VI'], [7, 'VII'], [8, 'VIII'], [9, 'IX'],
  [10, 'X'], [20, 'XX'], [30, 'XXX'], [40, 'XL'], [50, 'L'], [60, 'LX'], [70, 'LXX'], [80, 'LXXX'], [90, 'XC'],
  [100, 'C'], [200, 'CC'], [300, 'CCC'], [400, 'CD'], [500, 'D'], [600, 'DC'], [700, 'DCC'], [800, 'DCCC'], [900, 'CM'],
  [1000, 'M'], [2000, 'MM'], [3000, 'MMM'],
]);

export function intToRoman(num: number): string {
  let roman = '';
  let nextNum = num;
  let mod = 1;

  while (nextNum > 0) {
    mod *= 10;

    const v = nextNum % mod;
    roman = (numToSymbol.get(v) || '') + roman;
    nextNum -= v;
  }

  return roman;
}
