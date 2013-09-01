require([
    'underscore',
    'fossil',
    'services.template',
    'services.router',
    'services.session',
    'services.i18next'
], function (_, Fossil, template, router, session, i18n) {

    var app = new (Fossil.Application.extend({
        // i18n service namespace
        i18nextNs: "app",
        selector: "body",
        routes: {
            '': 'index'
        },
        template: null,

        index: function () {
            // forward to default module index
            this.services.router.navigate('change-me-in-kernel', {trigger: true, replace: false});
        }
    }))();

    app
        .use('template', template)
        .use('router', router)
        .use('session', session)
        .use('i18n', i18n)

//        .connect('foo', new FooModule())
        .start()

    ;
});
