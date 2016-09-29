'use strict';

/**
 * @ngdoc filter
 * @name repaso2yeomanApp.filter:sinvocales
 * @function
 * @description
 * # sinvocales
 * Filter in the repaso2yeomanApp.
 */
angular.module('repaso2yeomanApp')
  .filter('sinvocales', function () {
    return function (input) {
      return input.replace(/[aeiou]/g, 'x');
    };
  });
