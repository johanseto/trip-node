console.log(global)
console.log(setInterval)
let i = 0
let interval = setInterval(function() {
    console.log("hola")
    if (i == 3) {
        clearInterval(interval)
    }
    i++
}, 1000)

setImmediate(function() {
    console.log("hola iimediate")
})

//require();
//export..
console.log(process)
console.log(__dirname)
console.log(__filename)

//Create global varianles xD... if you dont need it, dont use it!
global.miVar = "value"
console.log(miVar)