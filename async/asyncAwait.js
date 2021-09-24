async function hi(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("hi " + name)
            resolve(name)
        }, 1000)
    })

}

async function talk(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("bla bla bnla i ")
            resolve(name)
        }, 1000)
    })
}

async function bye(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("bye", name)
            resolve(name)
        }, 2000)
    })

}
async function main() {
    let name = await hi("Johan")
    await talk()
    await talk()
    talk()
    await talk()
    bye(name)
    console.log("end for the working niigga")


}
console.log("just the fucking time")
main()
console.log("just the fucking finishing processwtime")