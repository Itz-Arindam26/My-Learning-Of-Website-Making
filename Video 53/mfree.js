let array = [33,2,11,60,-121];
console.log(array);
let newarr = [];
//  to find square of any number we can use
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newarr.push(element**2)
}
console.log(newarr);
// but instead of writing this code we can write
let a = array.map(e=>{return e**2;}); // this is a convienient way to do the same thing
console.log(a);
// the below one function will sort array in the way you want to filter out
const greaterThanSeven = (e) => {
    if (e > 7){ 
        return true; 
    }
    return false;
}
console.log(array.filter(greaterThanSeven), array.length);

// this will work as factorial finding machine
let arr2 = [1, 2, 3, 4, 5, 6];
const red = (a, b) => {
    return a*b;
}
const add =(a, b) => {
    return a+b;
}
console.log('Factorial Result:' ,arr2.reduce(red));
console.log('Fibonacci Result:' ,arr2.reduce(add));

// we can make any object into an array by the following function

console.log(Array.from('ASamanta'));