const http     = require('http')
const express  = require('express')
const Backbone = require('backbone')
const logger   = require('morgan')
const path     = require('path')
const fs       = require('fs')
const port     = 3000

/*
http.createServer( (req, res) => {
    res.end('Simple basic server is up.');
}).listen(port);
console.log(`Server running on *:${port}`);
*/

var app = express()
app.use(logger('dev', { immmediate: true}))
app.use(express.static('public'))
app.get('/', (req, res, next) => {   
    let html = path.resolve(__dirname + '/public/index.html')
    res.sendFile(html);
})
app.get('/movies', (req, res, next) => {
    res.sendFile('./ movies.json');
})

http.createServer(app).listen(port)
console.log(`Server running on *:${port}`)
