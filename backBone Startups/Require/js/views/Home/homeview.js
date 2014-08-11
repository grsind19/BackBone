//homeview.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/sidebar/sidebarView',
    'text!templates/home/homeTemplate.html'
], function($, _, Backbone, sidebarView, homeTemplate) {
    var HomeView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            $('.menu li').removeClass('active');
            $('.menu li a[href="#"]').parent().addClass('active');
            $(this.el).html(homeTemplate);
            var sidebar = new sidebarView();
            sidebar.render();
        }
    });
    return HomeView;
})