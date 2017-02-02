module.exports = (function () {
  'use strict';

  var Maths = require('./utils/Maths');

  return {
    problem1: function () {
      var multiples = Maths.multiples(1000, [3, 5]);
      return multiples;
    }
  };
})();