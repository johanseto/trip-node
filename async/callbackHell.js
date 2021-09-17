

function hi(name, callback) {
    
    setTimeout(function () {
        console.log("hi "+name)
        callback(name)
    }, 1000)
}

function talk(callback) {
    
    setTimeout(function () {
        console.log("bla bla bnla i ")
        callback()
    }, 1000)
}

function bye(name, callback) {
    setTimeout(function() {
        console.log("bye", name)
        callback()
    },2000)
}
// -------------------Runtime ma niggy callback hell---------------
// console.log("------------","starting proccees")
// hi("Johan" , function (name) {

//    talk(function(){
//        talk(function(){
//             talk(function(){
       
//                 bye(name, function(){
//                 console.log("finish greeting in the process")
//                 })

//             })   

//          }) 
//     }) 
  
// })


function conversation(name, times, callback) {
    if (times >= 0) {
        talk(function () {
            conversation(name, times-1, callback)
        })
    }else {
        bye(name, callback)
    }
    
}

console.log("starting process")
hi("cCharlie", function (name){
    conversation(name, 3, function(){
        console.log("finished process.")
    })
})
