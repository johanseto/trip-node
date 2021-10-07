//const process = require('process')\
process.on('beforeExit', () => {
    console.log('Ey !! The process its near to close.')
})

process.on('exit', () => {
    console.log('Process finished')
    setTimeout(() => {
        console.log('this doesnt work by not event loop after exit')
    }, 0)
})

setTimeout(() => {
    console.log('this works')
}, 0)
process.on('uncaughtException', (err) => {
    console.log(`There was an error: ${err.message}`)
})

//functionrror()