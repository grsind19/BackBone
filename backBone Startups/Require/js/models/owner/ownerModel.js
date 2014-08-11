//ownerModel.toJSON
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var ownerModel = Backbone.Model.extend({
        defaults: {
            query: "unknown"
        },
        initialize: function(options) {
            this.query = options.query;

        },
        url: function() {
            return 'https://api.github.com/users/' + this.query;
        },
        parse: function(res) {
            return res.data
        }
    });
    return ownerModel;
});