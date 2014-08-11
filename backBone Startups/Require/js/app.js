//app.js confirming router

define([
    'jquery',
    'underscore',
    'backbone',
    'router'

], function($, _, Backbone, Router) {
    var initialize = function() {
        Router.initialize();
    }
    return {
        initialize: initialize
    }
});