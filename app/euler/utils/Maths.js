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
    },
    /**
     * @param {number} numberOfValues
     * @return {number[]}
     */
    fib: function (numberOfValues) {
      var a = 0;
      var b = 1;
      var values = [];
      for(let index = 0; index < numberOfValues; index++) {
        let c = a + b;
        a = b;
        b = c;
        values.push(c);
      }
      return values;
    },
    /**
     * only return Even fib values upto max value eg 2, 8 etc
     * @param {number} [maxValue] only count to value this high
     * @return {number[]}
     */
    fibEven: function (maxValue) {
      var a = 0;
      var b = 1;
      var values = [];
      for(let index = 0; index < maxValue; index++) {
        let c = a + b;
        a = b;
        b = c;
        if(maxValue && (maxValue < c)) {
          return values;
        }

        if(c % 2 == 0) {
          values.push(c);
        }
      }
      return values;
    }
  };
})();