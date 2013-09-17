define([
    'fossil',
    './movieCollection'
], function (Fossil, Movies) {

    var moviesTpl = [
        '<ul>',
        '{{#each movies}}',
            '<li><a href="{{url \'/\' id }}">{{title}}</a></li>',
        '{{else}}',
            '<li>{{t "no movie"}}</li>',
        '{{/each}}',
        '</ul>'].join('');

    var ListView = Fossil.View.extend({
            className: 'mod-movies',
            template: moviesTpl,
            getViewData: function () {
                return {
                    movies: this.collection.toJSON()
                };
            }
        });

    var showTpl = [
        '<h3>{{movie.title}}</h3>',
        '<img src="{{movie.posters.thumbnail}}" />',
        '<p>{{movie.synopsis}}</p>',
        '<p><a href="{{url ""}}">Back</a></p>'
    ].join('');

    var ShowView = Fossil.View.extend({
            className: 'mod-movie',
            template: showTpl,
            getViewData: function () {
                return {
                    movie: this.model.toJSON()
                };
            }
        });

    return Fossil.Module.extend({
        events: {
            'start': function () {
                this.movies = new Movies();
                this.showLoading();
                this
                    .abort()
                    .waitFor(this.movies.fetch())
                    .thenWith(this, null, this.showError);
            }
        },
        routes: {
            '': 'index',
            '/:id': 'show'
        },
        index: function () {
            var view = new ListView({
                collection: this.movies
            });
            this.setView(view);
        },
        show: function (id) {
            var view = new ShowView({
                model: this.movies.get(id)
            });

            this.setView(view);
        },
        showLoading: function () {
            this.setLayout('<p>{{t "Loading"}}</p>');
        },
        showError: function () {
            this.setLayout('<p>{{t "Error"}}</p>');
        }
    });
});
