define('services.i18next', ['fossil-i18next', 'services.template'], function (I18n, template) {
    var i18n = new I18n({
        init: {
          fallbackLng: false,
          cookieName: false
        },
        template: template
    });
    return i18n;
});

define('services.template', [
    'fossil-handlebars',
    'services.router'
], function (Fossil, router) {
    return new Fossil.Services.Handlebars({
        expose: true,
        router: router
    });
});

define('services.router', ['fossil'], function (Fossil) {
    return new Fossil.Services.Routing();
});

define('services.session', ['fossil'], function (Fossil) {
    return new Fossil.Services.Session();
});
