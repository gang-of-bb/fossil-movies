require.config({
    baseUrl: "./src/",
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone',
        'handlebars': '../bower_components/handlebars/handlebars',
        'fossil': '../bower_components/fossil-core/fossil-core-amd',
        'fossil-view': '../bower_components/fossil-view/fossil-view-amd',
        'fossil-i18next': '../bower_components/fossil-i18next/fossil-i18next-amd',
        'fossil-handlebars': '../bower_components/fossil-core/src/adapter/handlebars',
        'i18next': '../bower_components/i18next/release/i18next.amd-1.6.3'
    },
    shim: {
        'underscore': {exports: '_'},
        'backbone': { deps: ['underscore', 'jquery'], exports: 'Backbone'},
        'handlebars': {exports: 'Handlebars'},
        'fossil-handlebars': {deps: ['fossil', 'handlebars'], exports: 'Fossil'}
    },
    waitSeconds: 15
});
