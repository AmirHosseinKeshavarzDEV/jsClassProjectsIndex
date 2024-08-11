// in this function find last charecter of value if value =="" or ==" " didnt show undifinde
function lastStringCharecter(string, lastChar) {
  lastChar = string[string.length - 1];
  if (string == "") {
    console.log("sorry bro");
  } else {
    console.log(lastChar);
  }
  return lastChar;
}

// call function and input value just "string" value
lastStringCharecter("");
