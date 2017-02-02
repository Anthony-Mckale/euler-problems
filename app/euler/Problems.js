module.exports = (function () {
  'use strict';

  var Maths = require('./utils/Maths');
  var _ = require('lodash');

  return {
    /**
     * all the natural numbers below <value> that are multiples of <multiples>
     * @param {number} [value] defaults to 1000
     * @param {number[]} [multiples]
     * @return {number[]}
     */
    problem1: function (value, multiples) {
      value = _.isUndefined(value) ? 1000 : value;
      multiples = _.isUndefined(multiples) ? [3, 5] : multiples;
      var multiplesOfValue = Maths.multiples(value, multiples);
      return Maths.sum(multiplesOfValue);
    },
    /**
     * By considering the terms in the Fibonacci sequence whose values do not exceed <value>, find the sum of the even-valued terms.
     * @param {number} [value] defaults to 4000000
     * @return {number[]}
     */
    problem2: function (value, multiples) {
      value = _.isUndefined(value) ? 4000000 : value;
      var evenFibValues = Maths.fibEven(value);
      return Maths.sum(evenFibValues);
    }
  };
})();