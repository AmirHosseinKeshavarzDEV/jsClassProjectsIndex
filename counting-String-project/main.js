//  this variable is intended to ensure that the function does not count any charecters other than english alphabet and numbers
let regex = /[a-zA-Z0-9]/g;

// in countingstring function match regex variable and str parameters to count string value
function countingstring(str) {
  // use match() and length() method in return line
  return `your countingstring is ${str.match(regex).length}`;
}

// call and log function and type string value to counting
console.log(countingstring("hello world"));
