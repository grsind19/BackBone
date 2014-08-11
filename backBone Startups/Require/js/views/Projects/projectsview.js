//projects view
define([
    'jquery',
    'underscore',
    'backbone',
    'models/projects/projectsModel',
    'collections/projects/projectsCollection',
    'views/sidebar/sidebarView',
    'views/Projects/projectlistview',
    'text!templates/home/homeTemplate.html',
    'text!templates/Projects/projectTemplate.html'
], function($, _, Backbone, ProjectModel, projectCollection, sidebarView, projectListView, sidebarTemplate, projectTemplate) {
    var projectView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.render();
        },
        render: function() {
            $('.menu li').removeClass('active');
            $('.menu li a[href="' + window.location.hash + '"]').parent().addClass('active');
            this.$el.html(projectTemplate);
            var project0 = new ProjectModel({
                title: 'Cross Domain',
                url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/cross-domain'
            });
            var project1 = new ProjectModel({
                title: 'Infinite Scroll',
                url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/infinite-scroll'
            });
            var project2 = new ProjectModel({
                title: 'Modular Backbone',
                url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/modular-backbone'
            });
            var project3 = new ProjectModel({
                title: 'Node MongoDB Mongoose Restify',
                url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/nodejs-mongodb-mongoose-restify'
            });
            var project4 = new ProjectModel({
                title: 'Todo App',
                url: 'https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/todo-app'
            });

            var aProjects = [project0,
                project1,
                project2,
                project3,
                project4
            ];
            var projectcollection = new projectCollection(aProjects);
            var projectlistview = new projectListView({
                collection: projectcollection
            });
            projectlistview.render();

            var sidebarview = new sidebarView();
            sidebarview.render();

        }
    });
    return projectView;

});