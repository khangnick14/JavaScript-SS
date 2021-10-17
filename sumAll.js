// We'll pass you an array of two numbers.
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function spinalCase(str) {
  return str
    .split(/\s+|_+|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("This  Is Spinal__Tap"));
