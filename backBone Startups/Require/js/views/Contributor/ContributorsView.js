define([
    'jquery',
    'underscore',
    'backbone',
    'collections/contributor/contributorCollection',
    'models/contributor/contributorModel',
    'views/Contributor/ContributorsListView',
    'text!templates/Contributor/contributorstemplate.html'
], function($, _, backbone, contributorCollection, contributorModel, contributorListView, contributortemplate) {

    var ContributorView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            var that = this;
            var onDatahandler = function(collection) {
                that.render();
            };
            this.collection = new contributorCollection([]);
            this.collection.fetch({
                success: onDatahandler,
                dataType: "jsonp"
            });
        },
        render: function() {
            $('.menu li').removeClass('active');
            $('.menu li a[href="' + window.location.hash + '"]').parent().addClass('active');
            var totalContributions = this.getTotalContributions(this.collection.models);
            var totalContributors = this.collection.models.length;
            var data = {
                total_contributions: totalContributions,
                total_contributors: totalContributors
            }
            var compiledTemplate = _.template(contributortemplate, data);
            $(this.el).html(compiledTemplate);
        },
        getTotalContributions: function(aModels) {
            var total = 0;
            _.each(aModels, function(contributorModel) {
                var contributorContributions = Number(contributorModel.get("contributions"));
                total += contributorContributions;
            })
            return total;
        },
        clearListView: function() {
            console.log("clearing sub view");
            //contributorsListView.clearListView();
        }
    });
    return ContributorView;

})