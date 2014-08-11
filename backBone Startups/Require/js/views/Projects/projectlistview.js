//projectlistitemview
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/projects/ProjectsCollection',
    'text!templates/Projects/projectlistTemplate.html'
], function($, _, Backbone, projectCollection, projectListTemplate) {
    var listView = Backbone.View.extend({
        el: $("#projects-list"),
        render: function() {
            var data = {
                projects: this.collection.models
            }
            var compiledTemplate = _.template(projectListTemplate, data)
            $("#projects-list").html(compiledTemplate);
        }
    });
    return listView;
})