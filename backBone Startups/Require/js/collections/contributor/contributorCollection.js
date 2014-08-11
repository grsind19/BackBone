define([
    'jquery',
    'underscore',
    'backbone',
    'models/contributor/contributorModel'
], function($, _, Bacbone, contributorModel) {
    var contributorCollection = Backbone.Collection.extend({
        Model: contributorModel,
        initialize: function() {},
        url: function() {
            return 'https://api.github.com/repos/thomasdavis/backbonetutorials/contributors';
        },
        parse: function(res) {
            var uniqueArray = this.removeDuplicates(res.data)
            return res.data;
        },
        removeDuplicates: function(myArray) {
            var length = myArray.length;
            var ArrayWithUniqueValues = [];

            var objectCounter = {};

            for (i = 0; i < length; i++) {

                var currentMemboerOfArrayKey = JSON.stringify(myArray[i]);
                var currentMemboerOfArrayValue = myArray[i];

                if (objectCounter[currentMemboerOfArrayKey] === undefined) {
                    ArrayWithUniqueValues.push(currentMemboerOfArrayValue);
                    objectCounter[currentMemboerOfArrayKey] = 1;
                } else {
                    objectCounter[currentMemboerOfArrayKey]++;
                }
            }

            return ArrayWithUniqueValues;
        }
    });
    return contributorCollection;
})