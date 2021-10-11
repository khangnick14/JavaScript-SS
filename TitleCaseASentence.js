/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
*/

//use .map()
const titleCase = (str) => {
  let convertToArray = str.toLowerCase().split(" ");
  let result = convertToArray.map((val) => {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
};

//use regex
/*
1. Lowercase the whole string using str.toLowerCase().
2. Replace every word’ first character to uppercase using .replace.
3. Search for character at the beginning of each word i.e. matching any character 
following a space or matching the first character of the whole string, by using the following pattern.
4. Regex explanation:
    Find all non-whitespace characters (\S)
    At the beginning of string (^)
    Or after any whitespace character (\s)
*/
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
