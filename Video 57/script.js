console.log('Hello World');

// but javascript adds only inline css not in internal or external css such that this make it in bad practices
// this will be able to access the element by class
// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[3].style.backgroundColor = 'red';

// this is how we can access any element by Id
// document.getElementById('mybox').style.backgroundColor = 'red';

// the above work is done by query selector but it works only on first element if it is a class or other than any id
// document.querySelector('.box').style.backgroundColor = 'red';

// to make all boxes red we have to use another method but in that it will not allow easily to do inline styling so we have to use the forEach loop as well
// document.querySelectorAll(".box").forEach(element => 
//     { 
//         element.style.backgroundColor = 'red'
//     }
// )

// we can access any element by its tag name
console.log(document.getElementsByTagName('div'));