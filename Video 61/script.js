let button = document.querySelector("#btn1")
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "Hello World! Content is changed"; // when you will click one time it will change content to "Hello World! Content is changed".
})
let button2 = document.querySelector("#btn2")
button2.addEventListener("dblclick", ()=>{
    document.querySelector(".box2").innerHTML  = "Double Clicked"; // this will change the content to "Double Clicked" when double click is done on button2.
})

document.addEventListener("contextmenu", ()=>{
    alert("Don't do right click please..");
})
