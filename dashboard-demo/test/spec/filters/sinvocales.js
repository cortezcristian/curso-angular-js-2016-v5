'use strict';

describe('Filter: sinvocales', function () {

  // load the filter's module
  beforeEach(module('repaso2yeomanApp'));

  // initialize a new instance of the filter before each test
  var sinvocales;
  beforeEach(inject(function ($filter) {
    sinvocales = $filter('sinvocales');
  }));

  it('should return the input prefixed with "sinvocales filter:"', function () {
    var text = 'angularjs';
    expect(sinvocales(text)).toBe('sinvocales filter: ' + text);
  });

});
