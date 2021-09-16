function amAsync(callback) {
    
    setTimeout(function () {
        console.log("I am begining async")
        callback()
    }, 1000)
}
console.log("starting proccees")
amAsync(function () {
    console.log("finish in the process")
})
console.log("finishing process")


function hi(name, callback) {
    
    setTimeout(function () {
        console.log("hi "+name)
        callback(name)
    }, 1000)
}

function bye(name, callback) {
    setTimeout(function() {
        console.log("bye", name)
        callback()
    },2000)
}
console.log("starting proccees")
hi("Johan" , function (name) {
    bye(name, function(){
        console.log("finish greeting in the process")
    })
    
})

