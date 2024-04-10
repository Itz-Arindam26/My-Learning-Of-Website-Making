console.log("Business Name Generator || ASamanta Co.");
let a1 = Math.random();
let a2 = Math.random();
let a3 = Math.random();
console.log(a1);
console.log(a2);
console.log(a3);
let a, b, c;

// Generate Adjective
if (a1 < 0.2) {
    a = "Amazing";
}
else if (a1 < 0.4 && a1 >= 0.2) {
    a = "Wow";
}
else if (a1 < 0.6 && a1 >= 0.4) {
    a = "Fantastic";
}
else if (a1 < 0.8 && a1 >= 0.6) {
    a = "Star";
}
else {
    a = "Crazy";
}

// Shop Name
if (a2 < 0.2) {
    b = "Garments";
}
else if (a2 < 0.4 && a2 >= 0.2) {
    b = "Fashion";
}
else if (a2 < 0.6 && a2 >= 0.4) {
    b = "Stationary";
}
else if (a2 < 0.8 && a2 >= 0.6) {
    b = "Confectionary";
}
else {
    b = "Foods";
}

// Generate Other name
if (a3 < 0.2) {
    c = "Hub";
}
else if (a3 < 0.4 && a3 >= 0.2) {
    c = "Limited";
}
else if (a3 < 0.6 && a3 >= 0.4) {
    c = "House";
}
else if (a3 < 0.8 && a3 >= 0.6) {
    c = "Enterprise";
}
else {
    c = "Co.";
}

// print the name by the following way
console.log(`Your Business Name is: ${a} ${b} ${c}`)