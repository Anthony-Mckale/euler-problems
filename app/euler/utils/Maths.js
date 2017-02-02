module.exports = (function () {
  'use strict';
  var _ = require('lodash');

  return {
    /**
     * all the natural numbers below <value> that are multiples of <multiples>
     * @param {number} value
     * @param {number[]} multiples
     * @return {number[]}
     */
    multiples: function (value, multiples) {
      var values = [];
      var addedMultiples = [];

      _.each(multiples, function (multiple) {
        // Start at above 0
        var counter = multiple;
        while (counter < value) {
          if (counter < value) {
            let alreadyAdded = false;
            for(let index in addedMultiples) {
              let addedMultiple = addedMultiples[index];
              if(counter % addedMultiple == 0) {
                alreadyAdded = true;
                continue;
              }
            }
            if(!alreadyAdded) {
              values.push(counter);
            }
          }
          counter += multiple;
        }
        addedMultiples.push(multiple);
      });

      // sort for prettiness
      return _.sortBy(values);
    },
    /**
     * @param {number[]} values
     * @return {number}
     */
    sum: function (values) {
      var summedValue = 0;
      for(let index in values) {
        summedValue += values[index];
      }
      return summedValue;
    }
  };
})();