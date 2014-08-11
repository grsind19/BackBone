var serachView = Backbone.View.extend({
    el: $("#searchContainer"),
    initialize: function() {
        _.bindAll(this, 'render', 'doSearch');
        this.render();
    },
    events: {
        'click input[type="button"]': 'doSearch'
    },
    render: function() {
        var variable = {
            serachterm: "My search"
        }
        var template = _.template($("#search_template").html(), variable);
        $(this.el).html(template);

    },
    doSearch: function() {
        alert("Search for " + $("#search_input").val());
    }
})
var serachview = new serachView();