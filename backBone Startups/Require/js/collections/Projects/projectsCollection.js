define([
    'jquery',
    'underscore',
    'backbone',
    'models/projects/projectsModel'
], function($, _, Backbone, projectModel) {
    var projectCollection = Backbone.Collection.extend({
        Model: projectModel,
        initialize: function() {

        },
    });
    return projectCollection;
})