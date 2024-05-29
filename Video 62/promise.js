console.log('ASAMANTA');
let prom1 = new Promise((resolve, reject, b) => {
    b = Math.random();
    if (b < 0.5) {
        reject('No one will support you! ☠️☠️')
    } else {
        setTimeout(() => {
            console.log('Yes! I am done.');
            resolve('ASamanta');
        }, 2000);
    }
}
);
prom1.then((a) => {
    console.log(a);
}
).catch((err) => {
    console.log(err);
}
)
let prom2 = new Promise((resolve, reject, c) => {
    c = Math.random();
    if (c < 0.5) {
        reject('No one will support you! ☠️☠️')
    } else {
        setTimeout(() => {
            console.log('Yes! I am done. 2');
            resolve('ASamanta DEVELOPER');
        }, 500);
    }
})
let p3 = Promise.allSettled([prom1, prom2])
p3.then((a) => {
  console.log(a);
}
).catch((err) => {
  console.log(err);
}
)