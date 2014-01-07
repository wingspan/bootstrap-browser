/* global require */
(function () {
    'use strict';

    require.config({
        baseUrl: 'js-built',
        paths: {
            underscore: '../bower_components/underscore/underscore',
            react: '../bower_components/react/react',
            'es5-shim': '../bower_components/es5-shim/es5-shim',
            jquery: '../bower_components/jquery/jquery',
            'cool-library': '../../../dist/cool-library'
        },
        shim: {
            'underscore': { deps: [], exports: '_' },
            'react': { deps: ['es5-shim'], exports: 'React'},
            'jquery': { deps: [], exports: '$' },
            'cool-library': { deps: ['underscore', 'react'], exports: 'Cool'}

        }
    });
})();
