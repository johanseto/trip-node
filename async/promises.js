function hi(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log("hi "+ name)
            resolve(name)
        }, 1000)
    })

}

function talk(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log("bla bla bnla i ")
            resolve(name)
        }, 1000)
    })  
}

function bye(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("bye", name)
            resolve(name)
        },2000)
    })

}

console.log("starting process")

hi('Carlos')
    .then((name)=>{
        return talk(name)
    })
    .then((name)=>{
        return talk(name)
    })
    .then((name)=>{
        return talk(name)
    })
    .then((name)=>{
        return talk(name)
    })
    .then((name) => {
        return bye(name)
    })
    .then((name)=>{
        console.log("finishing process")
    
    })
    .catch(error => {
        console.log("Ha habido un error")
        console.error(error)
    })