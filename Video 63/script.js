// dummy async function
// async function getData (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 2500);
//     })
// }

async function getData (){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data);
}


async function main (){
    console.log("Loading Modules");
    console.log('Do something else');
    console.log('Load data');
    let data = await getData()
    console.log(data);
    console.log('Process Data');
    console.log('task 2');
}
main()

// this is older way to for going on background
// data.then((v) => {
//     console.log(data);
//     console.log('Process Data');
//     console.log('task 2');
    
// })