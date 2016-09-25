//detect whether input is unix time

var input = "123";

console.log(Number.isInteger(input));

var parsedInput = parseInt(input);

if (isNaN(parsedInput)) {
    console.log("This is not a number")
} else {
    console.log("This is a number: " + parsedInput)
}