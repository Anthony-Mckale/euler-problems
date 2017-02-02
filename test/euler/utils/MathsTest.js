'use strict';
var chai = require('chai');
var expect = chai.expect;
var lodash = require('lodash');
var Maths = require('./../../../app/euler/utils/Maths');


describe('Maths', function() {
  describe('multiples', function() {
    it('multiples(10, [3,5])  should return [3, 5, 6, 9]', function() {
      // Given

      // When
      var actual = Maths.multiples(10, [3,5]);

      // Then
      var expected = [3, 5, 6, 9];
      expect(actual).to.deep.equal(expected);
    });
  });

  describe('sum', function() {
    it('sum([3, 5, 6, 9])  should return 23', function() {
      // Given

      // When
      var actual = Maths.sum([3, 5, 6, 9]);

      // Then
      var expected = 23;
      expect(actual).to.equal(expected);
    });
  });
});