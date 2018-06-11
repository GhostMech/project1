const Backbone = require('backbone')
const $        = require('jquery')
Backbone.$ = $  // Not working for me, yet

const Movies   = require('./collections/movies')
const data     = require('./movies.json')
var movies     = new Movies(data)
var MovieView  = require('./views/movie')

// "Because we want to export the modules from the data layer, as well as view layer, 
// we replace the old definition with:"
//module.exports = movies
module.exports = { movies: movies, MovieView: MovieView }

/* The Ch3 strategy:
 * 1. Create multiple Movie views for the items in a Movies collection
 * 2. Bind a Movie view to changes from Movie models
 * 3. Capture click events from views and selecting a Movie model
 * 4. Re-render MoviesList after a movie was selected.
 */