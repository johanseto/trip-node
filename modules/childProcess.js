const { exec, spawn } = require('child_process')

exec('lss -al', (err, stdout, stderr) => {
    if (err) {
        //console.error(err)
        console.log(stderr)
        return false
    }

    console.log(stdout)
})

let process = spawn('ls', ['-la'])
console.log(process.pid)
console.log(process.connected)
console.log(process.stdout.on('data', function(dat) {
    console.log('process killed?')
    console.log(process.killed)
    console.log(dat.toString())
}))

process.on('exit', function() {
    console.log('process end')
})