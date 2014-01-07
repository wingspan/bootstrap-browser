/** @jsx React.DOM */
define([
    'underscore', 'react',
    'stacktrace' // exposes global printStackTrace
], function (_, React) {
    'use strict';



    var HelloWorld = React.createClass({
        render: function () {
            return (
                <div>
                    <span>HelloWorld from the library! Here is a stacktrace:</span>
                    <pre>{printStackTrace()}</pre>
                </div>
            );
        }
    });


    return {
        HelloWorld: HelloWorld
    };
});
