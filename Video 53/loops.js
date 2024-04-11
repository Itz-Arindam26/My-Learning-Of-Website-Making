let a = [1,23, 45,6, 8];
a.forEach((value, index, a) =>{
    console.log(value, index, a);
})
// we can do same thing by for in loop
let Obj = {
    a: 1,
    b: 9,
    c: 4
}
for (const key in Obj) {
    if (Object.hasOwnProperty.call(Obj, key)) {
        const element = Obj[key];
        console.log(key, element);
    }
}
for (const value of Obj) {
    console.log(value);
}