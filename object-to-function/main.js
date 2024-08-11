// object for passing to function for complete process
const person = {
  // full name and age key value to pass for function
  Name: "amir",
  lastName: "amiri",
  Age: 23,
};
function addObject(personObj) {
  // math string and object in return line for process
  return `Hello ${personObj.Name} ${personObj.lastName} is ${personObj.Age} years old `;
}

// log and call function for execution process
console.log(addObject(person));
