// There are three solutions for this problems

// #1: Use 2 arrays
function convertToRoman_1(num) {
  let value = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let symbols = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let i = 12;
  let result = "";
  while (num > 0) {
    let division = Math.floor(num / value[i]);
    num = num % value[i];
    while (division--) {
      result += symbols[i];
    }
    i--;
  }
  return result;
}

console.log("#1");
console.log(convertToRoman_1(36));
console.log(convertToRoman_1(1004));
console.log(convertToRoman_1(3999));
console.log(`\n`);

//#2: Use 4 arrays

function convertToRoman_2(num) {
  let m = ["", "M", "MM", "MMM"];
  let c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let i = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  let thousand = m[Math.floor(num / 1000)];
  let hundred = c[Math.floor((num % 1000) / 100)];
  let tens = x[Math.floor((num % 100) / 10)];
  let ones = i[num % 10];

  return thousand + hundred + tens + ones;
}

console.log("#2");
console.log(convertToRoman_2(36));
console.log(convertToRoman_2(1004));
console.log(convertToRoman_2(3999));
