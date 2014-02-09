'use strict';

var hucApp = angular.module('hucApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

hucApp.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
