function asyncFunction(callback){
    setTimeout(function(){
        try {
            let a = 3 + z
            callback(null, a)
        } catch (e){
            callback(e)
        }
    }, 1000)
}

try {
asyncFunction(function(err, data) {
    if (err) {
        console.error('we have an error')
        console.error(err)
        throw err //NO VA A FUNMCIONAR WITH ASYNC
        //return false
    }
    console.log('your data is ok..', data)
})
} catch (e){
    console.log(e)
}

asyncFunction(function(err, data) {
    if (err) {
        console.error('we have an error')
        console.error(err)
        //throw err NO VA A FUNMCIONAR WITH ASYNC
        return false
    }
    console.log('your data is ok..', data)
})