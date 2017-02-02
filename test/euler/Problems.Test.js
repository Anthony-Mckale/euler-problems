'use strict';
var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var Problems = require('./../../app/euler/Problems');


describe('Problems', function() {
  describe('problem1', function() {
    // Given

    // When
    console.time('problem1');
    var actual = Problems.problem1();
    console.timeEnd('problem1');

    // Then
    var expected = 233168;

    expect(actual).to.equal(expected);
  });
});