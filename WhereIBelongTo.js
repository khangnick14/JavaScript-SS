/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] 
and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

//#1:

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

//#2:

//Count the number of entries that are smaller than the new value num
//The new value would be inserted after these values

function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}

//#3: use .findIndex()

function getIndexToIns(arr, num) {
  // sort and find right index
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex((currNum) => num <= currNum);
  // Returns index or total length of arr
  return index === -1 ? arr.length : index;
}

/*
First sort the array in ascending order, this is currently done using array functions for minimal footprint.
Once the array is sorted, we directly apply the .findIndex() where we are going to compare every element in the array 
until we find where num <= currNum - where the number we want to insert is less than or equal to the current number in the iteration.
Then we use ternary operations to check whether we got an index returned or -1. We only get -1 when the index was not found,
 meaning when we get a false for all elements in the array, and for such case, it would mean that num should be inserted at the end of the list. 
 Hence, why we use arr.length.
*/
getIndexToIns([40, 60], 500);
