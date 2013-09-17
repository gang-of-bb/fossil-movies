define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var key = 'mkdta6w5grk9qwasgyr2vmpu';
    var MovieCollection = Backbone.Collection.extend({
        url: _.template('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=<%= key %>', {key: key}),
        sync: function(method, model, options){
            options.timeout = 10000;
            options.dataType = "jsonp";
            return Backbone.sync(method, model, options);
        },
        parse: function (res) {
            return res.movies || [];
        }
    });

    return MovieCollection;
});
