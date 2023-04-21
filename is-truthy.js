//Using if/else statements, create a JavaScript code in a script tag that follows the following rules:
//If the value is truthy, print true;
//If the value is falsy, print the corresponding result:
//"The boolean value false is falsy";
//"The null value is falsy";
//"undefined is falsy";
//"The number 0 is falsy (the only falsy number)";
//"The empty string is falsy (the only falsy string)";

const ifiamlong = true;
if (ifiamlong) {
  console.log("I am a string");
} else if (false) {
  console.log("The boolean value false is falsy");
} else if (null) {
  console.log("The null value is falsy");
} else if (undefined) {
  console.log("undefined is falsy");
} else if (0) {
  console.log("The number 0 is falsy (the only falsy number)");
} else if ("") {
  console.log("The empty string is falsy (the only falsy string)");
}
