// first version of the view
const $        = require('jquery')
const Backbone = require('backbone')

var MovieView = Backbone.View.extend({
    tagName: 'article',
    className: 'movie',

    // Render function
    render: function () {
        this.$el.html(this.model.get('title'))
        this.$el.toggleClass('selected', this.model.get('selected'))
        return this
    }
})
module.exports = MovieView