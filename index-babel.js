'use strict';

import http from 'http'

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World!\n')
}).listen(1337, '127.0.0.1')
console.log(`Server running at http://127.0.0.1:1337/`)

/*
use this package.json:
{
  "name": "nodes",
  "version": "1.0.0",
  "description": "",
  "main": "test.js",
  "scripts": {
    "start": "nodemon index.js --exec babel-node --presets es2015,stage-2"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "backbone": "^1.3.3",
    "express": "^4.16.3",
    "jquery": "^3.3.1",
    "morgan": "^1.9.0",
    "underscore": "^1.9.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "chai": "^4.1.2",
    "mocha": "^5.2.0"
  }
}
*/