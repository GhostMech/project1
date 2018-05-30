const Backbone = require('backbone')
const Movie = require('models/movie')
const Movies = Backbone.Collection.extend({
    model: Movie
})
module.exports = Movies