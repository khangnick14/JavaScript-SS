/*
Return true if the given string is a palindrome. 
Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into 
the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

//There are two ways to solve this problem

// #1: Use build-in method: split(), reverse(), and join()
function palindrome(str) {
  let regex = /[^A-Za-z0-9]/g;
  let lowStr = str.toLowerCase().replace(regex, "");
  let s = lowStr.split("").reverse().join("");
  return s === lowStr;
}

console.log(palindrome("_eye"));
console.log(palindrome("0_0 (: /- :) 0-0"));

// #2: Use for-loop
function palindrome_2(str) {
  let regex = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(regex, "");
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome_2("_eye"));
console.log(palindrome_2("0_0 (: /- :) 0-0"));
