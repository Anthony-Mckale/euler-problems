'use strict';
var chai = require('chai');
var expect = chai.expect;
var _ = require('lodash');
var Maths = require('./../../../app/euler/utils/Maths');


describe('Maths', function() {
  describe('multiples', function() {
    let testsData = [
      {
        name: 'Standard',
        givenValue: 10,
        givenMultiples: [3,5],
        expected: [3, 5, 6, 9]
      },
      {
        name: 'Standard, with divisible multiple ',
        givenValue: 10,
        givenMultiples: [3,6,5],
        expected: [3, 5, 6, 9]
      },
      {
        name: 'Standard, with divisible multiple ',
        givenValue: 3 * 5 * 2,
        givenMultiples: [3, 5],
        expected: [3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27]
      }
    ];
    _.each(testsData, function (testData) {
      it(testData.name + ': multiples('+testData.givenValue+', ['+testData.givenMultiples+'])  should return ['+testData.expected+']', function() {
        // Given

        // When
        var actual = Maths.multiples(testData.givenValue, testData.givenMultiples);

        // Then
        expect(actual).to.deep.equal(testData.expected);
      });
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

  describe('fib', function() {
    let testsData = [
      {
        name: 'Standard',
        givenValue: 10,
        expected: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
      }
    ];
    _.each(testsData, function (testData) {
      it(testData.name + ': fib('+testData.givenValue+')  should return ['+testData.expected+']', function() {
        // Given

        // When
        var actual = Maths.fib(testData.givenValue);

        // Then
        expect(actual).to.deep.equal(testData.expected);
      });
    });
  });

  describe('fibEven', function() {
    let testsData = [
      {
        name: 'Standard',
        givenMax: 36,
        expected: [2, 8, 34]
      },
      {
        name: 'Standard',
        givenMax: 30,
        expected: [2, 8]
      }
    ];
    _.each(testsData, function (testData) {
      it(testData.name + ': fibEven('+ testData.givenMax+')  should return ['+testData.expected+']', function() {
        // Given

        // When
        var actual = Maths.fibEven(testData.givenMax);

        // Then
        expect(actual).to.deep.equal(testData.expected);
      });
    });
  });
});