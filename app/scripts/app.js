

// app.js
'use strict';

angular
.module('sortApp', [
        'ngRoute',
        'ngMessages',
        'angular.filter'
	])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/map.html',
        controller: 'MainCtrl'
      })
      .when('/table', {
        templateUrl: 'views/table.html',
        controller: 'TableCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


