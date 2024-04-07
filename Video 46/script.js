console.log('Hello World');
// console.log is used to print anything on the screen or console
var a = 10; // This is a type of variable of integer data type
var b = 'S'; // this is a type of string
b=10;
var c = "HAM Hai YAM, YAM hai HAM"; // this is also a type of string
c = 78;
console.log(typeof a, typeof b, typeof c);
console.log(a+b+c); // here you can do basic arithmatic works
// difference between let, var & Constant in Javascript?
/* 1.var can be declared many times but let and const can be declare only once 
2.let and const are block scoped but var is globelly scoped 
3.const and let can not be reassigned or changed and if it is changed the compiler will through error but in case of var it can be declared many time. 
Examples are given below:*/
var a1 = 56;
a1 = 45; // we declared a1 two times but the compiler will not say anything
console.log(a1);
const a2 = 78; // here you can declare only once and if you try to change it then the compiler will through error
// a2 = 67;
console.log(a2);
// for (let b3 = 0; b3 < 10.length; b3++) {
//     const element = 10[b3];
//     // this is let variable but it can be declared only one time in only a block 
// }
/* Rules related to Js 
    1. the variables will not start by any number like in cas of 45a.It can be declared by $, _ and an english letter only
    2. this is a case sensitive lang such that it see 'a' and'A' as different variables 
    3. You cannot use the reserved words like name, now etc. */
// we can also styling css using this js
let s = 4;
let t = "ASamanta";
let u = null;
let v = true;
let w = undefined;
const pi = 3.1415;
console.log(typeof s,typeof t,typeof u,typeof v, typeof pi, typeof w);
console.log( s, t, u, v, pi, w);
let sc = {
   /*Key*/ name : "ASamanta"/*this is value */,
    "job code": 78400
}
console.log(sc);
sc.salary= "10M";
console.log(sc);
sc.salary= "100M";
console.log(sc);