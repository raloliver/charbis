var http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    })
    res.end('Hello Node')
}).listen(3007)

console.log('Init.')