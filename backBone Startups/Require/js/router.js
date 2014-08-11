define([
    'jquery',
    'underscore',
    'backbone',
    'views/Home/homeview',
    'views/Contributor/ContributorsView',
    'views/Projects/projectsview',
    'views/Footer/footerview'
], function($, _, backbone, homeView, contributorView, projectView, footerView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "projects": "showProjects",
            "users": "showContributor",
            "*actions": "defaultAction"
        }
    });
    var initialize = function() {
        var app_router = new AppRouter;

        app_router.on("route:showProjects", function() {
            var projectsview = new projectView();
            projectsview.render();
        });

        app_router.on("route:showContributor", function() {
            var contributorview = new contributorView();
            contributorview.render();
        });
        app_router.on("route:defaultAction", function() {
            var homeview = new homeView();
            homeview.render();
        });

        var footer = new footerView();
        Backbone.history.start();
    }

    return {
        initialize: initialize
    }
})