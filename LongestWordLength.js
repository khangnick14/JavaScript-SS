/* 
Find the Longest Word in a StringPassed
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

//There are 4 ways to solve this question

//#1: split the strings to array, then loop thru each and compare to variable max
//#2: use .reduce() method

function findLongestWordLength2(s) {
  return s.split(" ").reduce(function (longest, word) {
    return Math.max(longest, word.length);
  }, 0);
}

//#3: use spread operator and .map() method. Split string to array, then map it to make a new arrays
//show the length of each words, then use Math.max() with ... to find the longest

function findLongestWordLength3(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

//#4: Apply recursion with slice() method.

function findLongestWordLength4(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}
