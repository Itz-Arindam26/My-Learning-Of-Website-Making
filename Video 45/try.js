console.log("Hello World!")
console.log("I am a string")
console.log(5 + 5)
// the below one can print current time in js
for(let i=0;i<=10000;i++){
    console.log("We are at index no. "+i )
}
var d = new Date();

console.log('Current Date & Time: ' + d); 
console.time();
for(let i=0;i<=10000;i++){}
console.timeEnd()