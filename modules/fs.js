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
    fs.writeFile(path, content, (err) => { //ASYNC
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
write2(__dirname + '/file2.txt', 'I am a new file niiga', console.log)
delete_file(__dirname + '/file2.txt', console.log)