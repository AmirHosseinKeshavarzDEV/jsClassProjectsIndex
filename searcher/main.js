// first variables is for string let

let string = prompt("Enter your firt Text:");

// second variables IS TARGET for find txt
let target = prompt("Enter your target Text:");

// for use includes operation use this syntax
if (string.includes(target)) {
    // If this operation is performed, this line of code will be executed
  alert(`Yes (${target}) is at (${string})`);
  //If this operation is not performed, this line of code will be executed
} else {
  alert(`No (${target}) isnt at (${string}) `);
}
