const Backbone = require('backbone')
const Movie = require('../models/movie')
const Movies = Backbone.Collection.extend({
    model: Movie,

    // Unselect all models
    resetSelected: function() {
        this.each(model => {
            model.set({"selected": false})
        })
    },

    // Select a specific model from the collection
    selectByID: function(id) {
        this.resetSelected()
        let movie = this.get(id)
        movie.set({"selected": true})
        return movie.id
    }
})
module.exports = Movies