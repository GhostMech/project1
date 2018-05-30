const Backbone = require('backbone')
const Movies   = require('collections/movies')
const data     = require('./movies.json')
var movies     = new Movies(data)
module.exports = movies