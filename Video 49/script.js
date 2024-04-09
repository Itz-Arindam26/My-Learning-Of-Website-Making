// This folder is related to functions in js files
// We can make any function for anything means anything.For a string, for a number
// I am here taking an example for better understanding of this concept
function chnname(name) {
    console.log("Hey This is " + name + "..");
}
console.log("Hey This is ASamanta.."); // Let say I have to print for 400 different.It would be difficult to do this. To make this easy, the functions are made in js it can be directly used.
// the function above will be called like below:
chnname("ASamanta");
// I can use above one by any name for example:
chnname("Shruti");
// now do  this by another things..
function sum(a , b) {
    return (a + b); // this keyword is used to return anything from the function.It may be a string, a number or anything else..
}
result1 = sum(10, 20); // the sum of the values is stored in result
console.log("The result of 10 and 20 is " , result1);

// The below one is the example of arrow function..
const diff = (a, b) => {
    c = (a>b) ? (a-b): (b-a);
    return c;
}
console.log("The difference between 50 and 30 is", diff(30, 50));