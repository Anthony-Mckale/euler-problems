module.exports = (function () {
  'use strict';
  return {
    /**
     * @param {number} value
     * @param {number[]} multiples
     * @return {number[]}
     */
    multiples: function (value, multiples) {
      return [];
    },
    /**
     * @param {number[]} values
     * @return {number}
     */
    sum: function (values) {
      var summedValue = 0;
      for(var index in values) {
        summedValue += values[index];
      }
      return summedValue;
    }
  };
})();