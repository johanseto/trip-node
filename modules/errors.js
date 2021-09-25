function getBroke() {
    return 3 + z
}

try {
    getBroke()
} catch (err) {
    console.error('oh something got broken.')
    console.error(err.message)
    console.log('but nothing happen, we catched')
}

console.log('this its at the end.\n')

function otherFunction() {
    return getBroke()
}

try {
    otherFunction()
} catch (err) {
    console.error('oh something got broken.')
    console.error(err.message)
    console.log('but nothing happen, we catched')
}

//asynchronous
function asyncGetBroke(cb) {
    setTimeout(() => { //This function its executed in other thread
        try {
            return 3 + z
        } catch (err) {
            console.error('Error un my async function.')
            cb(err)
        }

    })

}

try {
    asyncGetBroke(console.log)
} catch (err) {
    console.error('oh something got broken.')
    console.error(err.message)
    console.log('but nothing happen, we catched')
}