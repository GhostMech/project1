// first version of the view
const $        = require('jquery')
const _        = require('underscore')
const Backbone = require('backbone')

var MovieView = Backbone.View.extend({
    tagName: 'article',
    className: 'movie',
    template: '<h1><%= title %><hr></h1>',

    // Render function
    render: function () {
        /*
        this.$el.html(this.model.get('title'))
        */
        var tmpl = _.template(this.template)
        this.$el.html(tmpl(this.model.toJSON()))
        this.$el.toggleClass('selected', this.model.get('selected'))
        return this
    },

    // Initialize?
    initialize: function() {
        this.listenTo(this.model, 'change:title', this.render)
    }
})
module.exports = MovieView