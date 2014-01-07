/** @jsx React.DOM */
define([
    'underscore', 'react',
    'cool-library'
], function (_, React, Cool) {
    'use strict';

    var HelloWorld = Cool.HelloWorld;

    function entrypoint() {
        var content = (
            <div>
                <div>Hello World from the app</div>
                <HelloWorld/>
            </div>

            );
        React.renderComponent(content, document.getElementById('root'));
    }


    return {
        entrypoint: entrypoint
    };
});
