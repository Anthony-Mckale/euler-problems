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

  describe('problem2', function() {
    // Given

    // When
    console.time('problem2');
    var actual = Problems.problem2();
    console.timeEnd('problem2');

    // Then
    var expected = 4613732;

    expect(actual).to.equal(expected);
  });
});