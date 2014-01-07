/* global require */
(function () {
    'use strict';

    require.config({
        baseUrl: 'js-built',
        paths: {
            underscore: '../bower_components/underscore/underscore',
            'underscore-string': '../bower_components/underscore.string/lib/underscore.string',
            jquery: '../bower_components/jquery/jquery',
            kendo: '../bower_components/kendo-ui/src/js/kendo.web',
            react: '../bower_components/react/react',
            'es5-shim': '../bower_components/es5-shim/es5-shim'
        },
        shim: {
            'underscore': { deps: [], exports: '_' },
            'underscore-string': { exports: '_s' },
            'jquery': { deps: [], exports: '$' },
            'kendo': { deps: [], exports: 'kendo' },
            'react': { deps: ['es5-shim'], exports: 'React'}
        }
    });
})();
