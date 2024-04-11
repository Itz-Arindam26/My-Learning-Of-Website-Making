// The solution is given below...

console.log('\nFactorial Finder || By ASamanta');

function factorial(number) 
{
    let arr = Array.from(Array(number + 1).keys());
    let c = arr.slice(1,).reduce((a, b) =>
        {
            return a * b;
        }
    )
    console.log("The factorial of the number is " + c + '.')
};
let a = 150; // Enter your number here...
factorial(a);