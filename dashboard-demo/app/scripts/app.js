'use strict';

/**
 * @ngdoc overview
 * @name repaso2yeomanApp
 * @description
 * # repaso2yeomanApp
 *
 * Main module of the application.
 */
angular
  .module('repaso2yeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'adf', 'adf.structures.base', 'adf.widget.clock'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
