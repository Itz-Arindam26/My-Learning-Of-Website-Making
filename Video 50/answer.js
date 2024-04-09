let a1 = Math.random();
let add =(a, b)=>{
    return a + b;
} 
let sub =(a, b)=>{
    return a - b;
}
let mul = (a, b)=>{
    return a*b;
}
let div = (a, b)=>{
    return a / b;
}
let expo = (a, b)=> {
    return a ** b;
}

// Enter your number here
let a = 45;
let b= 67;


if(a1 > 0.1){
    console.log("Addition --->" , add(a, b));
    console.log("Subtraction --->" , sub(a, b));
    console.log("Multiplition --->" , mul(a, b));
    console.log("Divition --->" , div(a, b));
    console.log("Exponentiation --->" , expo(a, b));
}
else{
    console.log("Addition --->" , (a**b));
    console.log("Subtraction --->" , (a+ b));
    console.log("Multiplition --->" , (a / b));
    console.log("Divition --->" , (a- b));
    console.log("Exponentiation --->" , (a*b));
}
