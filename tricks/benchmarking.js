let sum = 0

console.time('execution')




console.time('loop')

for (let i = 0; i < 1000000000; i++) {
    sum += 1
    
}
console.timeEnd('loop')


let sum2 = 0
console.time('loop2');
for (let i = 0; i < 10000000000; i++) {
    sum2++;
}
console.timeEnd('loop2')




console.time('loop async')
console.log('start async loop')
async_loop()
    .then(() => console.timeEnd('loop async'))

function async_loop() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('finishing async loop')
            resolve()
        }, 2)
    })
}


console.timeEnd('execution')