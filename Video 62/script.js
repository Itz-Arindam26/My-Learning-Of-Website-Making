console.log('Kittu is a hacker...')
console.log('Kittu is a hecker...')

setTimeout(() => {
    console.log('ASamanta')
}, 1000);

console.log('Hello World!')
const callback = (arg) => {
  console.log(arg);
}

const loadScript = (src, callback) => {
  let sc = document.createElement('script');
  sc.src = src;
  sc.onload = callback("ASamanta");
  document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)