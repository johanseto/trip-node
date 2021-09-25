const fs = require('fs')

function read(path, cb) {
    fs.readFile(path, (err, data) => {
        console.log(data.toString())
    })

}


function delete_file(path, cb) {
    fs.unlink(path, cb)
    console.log('deleted, ', path)

}


function write(path, content, cb) {
<<<<<<< HEAD
    fs.writeFile(path, content, (err) => { //ASYNC, wait to response. oR is slower.
=======
    fs.writeFile(path, content, (err) => { //ASYNC
>>>>>>> 12517511bc221eee36a8330620e33a4d6a8e177c
        if (err) {
            console.err("i cant write it,", error)
        } else {
            console.log("i  wrote1 it correctly", path)
        }
    })
}

function write2(path, content, cb) {
    fs.writeFile(path, content, cb)
    console.log('wrote2, ', path)
}

//read(__dirname + '/file.txt')

write(__dirname + '/file1.txt', 'I am a new file niiga', console.log)
delete_file(__dirname + '/file1.txt', console.log)


//read(__dirname + '/file1.txt')
<<<<<<< HEAD
//write2(__dirname + '/file2.txt', 'I am a new file niiga', console.log)
//delete_file(__dirname + '/file2.txt', console.log)

//fs function return null when there was no problem.
=======
write2(__dirname + '/file2.txt', 'I am a new file niiga', console.log)
delete_file(__dirname + '/file2.txt', console.log)
>>>>>>> 12517511bc221eee36a8330620e33a4d6a8e177c
