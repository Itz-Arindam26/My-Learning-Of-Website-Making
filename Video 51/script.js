console.log("This is a folder based on the strings and its functions..");
let a = "ASamanta";
console.log(a[1], '\n','\n'); // this is the way to print any letter in the string in js
// here index is start from 0 so it will give S in the terminal. We cann also access all the character in the string
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
// console.log(a[8]); // if i write this syntax, it will not through error but it will say that this is undefined

// we can find length of the string by using .length property in js
console.log("Name's length is: ",a.length);

// now move to another properties
let dev = "Shruti";
//  array index 
//          S h r u t i
//index no. 0 1 2 3 4 5
let dev2 = "Sanghvi";
console.log("The name of the girl is " + dev + " and her friend is " + dev2 + '.') // this is not the convinient way to print any thing on the screen so to make this thing convinient, we use the following thing in js..
console.log(`The name of the girl is ${dev} and her friend is ${dev2}.`)
// the thing is written is like below
// console.log(`the thing is written is like below and ${your variables here}`
// we can uppercase any string by the following command
console.log(a.toUpperCase()); // this will give ASamanta in Uppercase form..
// same we can do while doing the thing in lower case
console.log(a.toLowerCase()); //this will do the things in lowercase
// to write thing like po"ha we use the following command..
console.log("This is a string with \"quotes\" included");
// we use same thing while doing this with single coatation mark
console.log("This is a string with \'single quotes\' included");
// there is another function that we use is the printing certain things fron the string..
// we can print any word by using slice function in js...
console.log(dev.slice(0,5));
// we can print anything from exculding anthing from any index number
console.log(dev.slice(1))
// we can replace anything while printing but it reacts on first occurence
console.log(dev.replace('S', 'A'));
// we can add anything in the string by using concat function..
console.log(dev.concat(a , "samanta"));