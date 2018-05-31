const http     = require('http')
const express  = require('express')
const Backbone = require('backbone')
const logger   = require('morgan')
const path     = require('path')
const fs       = require('fs')
const port     = 3000


var debug = require('debug')('express')
, name = 'My App'

debug('booting %o', name)
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
    let movies = path.resolve(__dirname + '/movies.json')
    res.sendFile(movies)
})
app.get('/chai', (req, res, next) => {
    let chai = path.resolve(__dirname + '/public/chai.html')
    res.sendFile(chai)
})

http.createServer(app).listen(port)
console.log(`Server running on *:${port}`)
