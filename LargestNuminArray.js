/*
Return an array consisting of the largest number from each provided sub-array.
 For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

//Ex: largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//Ans: [1000, 1001, 857, 1]

//4 solutions:

//#1: 2 loops
//#2: combine map and reduce method.
function largestOfFour2(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}

/*
  1. we map all items within the main array to a new array using Array.prototype.map() 
  and return this array as the final result within each inner array
  
  2. we reduce its contents down to a single value using Array.prototype.reduce()
  the callback function passed to the reduce method takes the previous value and the 
  current value and compares the two values if the current value is higher than the 
  previous value we set it as the new previous value for comparison with the next 
  item within the array or returns it to the map method callback if it’s the last item
  */

//#3: combine map and apply.bind()
function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

/*
  Rewrite Math.max to make it work with argument Arrays
  more details: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-return-largest-numbers-in-arrays/16042
  */

//#4: recursion
function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
}
