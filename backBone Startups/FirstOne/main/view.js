/*Expample One*/

/*(function($) {
    var ListView = Backbone.View.extend({
        el: $('body'),
        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },
        render: function() {
            $(this.el).append('<ul><li>Hello World</li></ul>');
        }
    });
    var listView = new ListView();
})(jQuery);*/
/*Expample TWO*/
/*(function($) {
    var ListView = Backbone.View.extend({
        el: $('body'),
        events: {
            'click #add': 'addItem'
        },
        initialize: function() {
            _.bindAll(this, 'render', 'addItem');
            this.counter = 0;
            this.render();
        },
        render: function() {
            $(this.el).append('<button id="add">AddItem</button><ul></ul>');
        },
        addItem: function() {
            this.counter++;
            $('ul', this.el).append('<li>heloworld' + this.counter + '</li>')
        }
    });
    var listView = new ListView();
})(jQuery);*/

/*Expample 3*/

/*(function($) {

    var Item = Backbone.Model.extend({
        defaults: {
            part1: "hello",
            part2: "world"
        }
    });

    var List = Backbone.Collection.extend({
        model: Item
    });

    var ListView = Backbone.View.extend({
        el: $('body'),
        events: {
            'click #add': 'addItem'
        },
        initialize: function() {
            _.bindAll(this, 'render', 'addItem', 'appendItem');
            this.collection = new List();
            this.collection.bind('add', this.appendItem)
            this.counter = 0;
            this.render();
        },
        render: function() {
            var self = this;
            $(this.el).append('<button id="add">AddItem</button><ul></ul>');
            _.each(this.collection.models, function(item) {
                self.appendItem(item);
            });
        },
        addItem: function() {
            this.counter++;
            var item = new Item();
            item.set({
                part2: item.get('part2') + this.counter
            });
            this.collection.add(item);
        },
        appendItem: function(item) {
            $('ul', this.el).append("<li>" + item.get('part1') + " " + item.get('part2') + "</li>")
        }
    });
    var listView = new ListView();
})(jQuery);*/

/*Expample 4*/

/*(function($) {

    var Item = Backbone.Model.extend({
        defaults: {
            part1: "hello",
            part2: "world"
        }
    });

    var List = Backbone.Collection.extend({
        model: Item
    });

    var ItemView = Backbone.View.extend({
        tagName: 'li',
        initialize: function() {
            _.bindAll(this, 'render');
        },
        render: function() {
            $(this.el).html('<span>' + this.model.get("part1") + " " + this.model.get("part2") + '</span>');
            return this;
        }
    });

    var ListView = Backbone.View.extend({
        el: $('body'),
        events: {
            'click #add': 'addItem'
        },
        initialize: function() {
            _.bindAll(this, 'render', 'addItem', 'appendItem');
            this.collection = new List();
            this.collection.bind('add', this.appendItem)
            this.counter = 0;
            this.render();
        },
        render: function() {
            var self = this;
            $(this.el).append('<button id="add">AddItem</button ><ul></ul>');
            _.each(this.collection.models, function(item) {
                self.appendItem(item);
            });
        },
        addItem: function() {
            this.counter++;
            var item = new Item();
            item.set({
                part2: item.get('part2') + this.counter
            });
            this.collection.add(item);
        },
        appendItem: function(item) {
            var itemView = new ItemView({
                model: item
            });
            $('ul', this.el).append(itemView.render().el);
        }
    });
    var listView = new ListView();
})(jQuery);*/
/*Expample 5*/

(function($) {

    Backbone.sync = function(method, model, success, error) {
        success();
    }

    var Item = Backbone.Model.extend({
        defaults: {
            part1: "hello",
            part2: "world"
        }
    });

    var List = Backbone.Collection.extend({
        model: Item
    });

    var ItemView = Backbone.View.extend({
        tagName: 'li',
        events: {
            'click span.swap': 'swap',
            'click span.delete': 'remove'
        },
        initialize: function() {
            _.bindAll(this, 'render', 'swap', 'remove', 'unrender');
            this.model.bind('change', this.render);
            this.model.bind('remove', this.unrender);
        },
        render: function() {
            $(this.el).html('<span style="color:black;">' + this.model.get('part1') + ' ' + this.model.get('part2') + '</span> &nbsp; &nbsp; <span class="swap" style="font-family:sans-serif; color:blue; cursor:pointer;">[swap]</span> <span class="delete" style="cursor:pointer; color:red; font-family:sans-serif;">[delete]</span>');
            return this;
        },
        swap: function() {
            var swapped = {
                part1: this.model.get('part2'),
                part2: this.model.get('part1')
            }
            this.model.set(swapped);
        },
        remove: function() {
            this.model.destroy();
        },
        unrender: function() {
            $(this.el).remove();
        }
    });

    var ListView = Backbone.View.extend({
        el: $('body'),
        events: {
            'click #add': 'addItem'
        },
        initialize: function() {
            _.bindAll(this, 'render', 'addItem', 'appendItem');
            this.collection = new List();
            this.collection.bind('add', this.appendItem)
            this.counter = 0;
            this.render();
        },
        render: function() {
            var self = this;
            $(this.el).append('<button id="add">AddItem</button ><ul></ul>');
            _.each(this.collection.models, function(item) {
                self.appendItem(item);
            });
        },
        addItem: function() {
            this.counter++;
            var item = new Item();
            item.set({
                part2: item.get('part2') + this.counter
            });
            this.collection.add(item);
        },
        appendItem: function(item) {
            var itemView = new ItemView({
                model: item
            });
            $('ul', this.el).append(itemView.render().el);
        }
    });
    var listView = new ListView();
})(jQuery);