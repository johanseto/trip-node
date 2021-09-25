const http = require('http')

http.createServer(router).listen(3000)

function router(req, res) {
    console.log('new request')
    console.log(req.url)
    switch (req.url) {
        case '/hi':
            res.write('hi')
            res.end()
            break
        case '/use':
            res.writeHead(201, {
                'Content-Type': 'text/plain'
            })
            res.write('hi I node to use http from node')

            res.end()
            break
        default:
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            })
            res.write('404 error, Not founded')
            res.end()
            break
    }

}
console.log("listenning http in port 3000")