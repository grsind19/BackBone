//footer view
define([
    'jquery',
    'underscore',
    'backbone',
    'models/owner/ownerModel',
    'text!templates/Footer/footerTemplate.html'
], function($, _, Backbone, ownerModel, footerTemplate) {
    var FooterView = Backbone.View.extend({
        el: $("#footer"),
        initialize: function() {
            var that = this;
            var options = {
                query: 'thomasdavis'
            };
            var datahandler = function(collection) {
                that.render();
            };
            this.model = new ownerModel(options);
            this.model.fetch({
                success: datahandler,
                dataType: "jsonp"
            });
        },
        render: function() {
            var data = {
                owner: this.model.toJSON(),
                _: _
            };
            var compiledTemplate = _.template(footerTemplate, data)
            $(this.el).html(compiledTemplate);
        }
    });
    return FooterView;
});