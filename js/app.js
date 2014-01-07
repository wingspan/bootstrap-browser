/** @jsx React.DOM */
define([
    'underscore',
    'react'
], function (_, React) {
    'use strict';

    function entrypoint() {
        React.renderComponent(<div>Hello World</div>, document.getElementById('root'));
    }


    return {
        entrypoint: entrypoint
    };
});
