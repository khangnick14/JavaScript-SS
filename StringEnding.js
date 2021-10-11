//Check ending of string whether if it is equal to the target string
//3 ways to solve the problems
//#1: slice(str.length - target.length)
//#2: slice(-target.length)

const str = "Hello";
const checkEnding = (str, target) => {
  return str.slice(str.length - target.length) === target;
  //return str.slice(-target.length) === target;
};

console.log(checkEnding(str, "lo"));

//#3: use the constructor of the regular expression object new
//RegExp(pattern[, flags]), so we start with: new RegExp(target).

function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}
