//server com node
var http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    })
    res.end('Hello Node')
}).listen(3003)

console.log('Init with Node')

//server com express
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        user: {
            id: 19861,
            name: "Israel",
            email: "eu@ral.ninja",
            vip: true,
            config: []
        }
    })
    //res.send('Hello Express')
})

app.listen(3007, () => {
    console.log('Init with Express')
})