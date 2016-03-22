

// app.js
'use strict';

angular.module('sortApp', [
        'ngRoute',
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
  })
.controller('MainCtrl', function($scope){
    console.log('something fired');
})
.controller('TableCtrl', function($scope) {
  $scope.sortType = 'name'; // set the default sort type
  $scope.sortReverse = false;  // set the default sort order
  $scope.searchPlayer = '';     // set the default search/filter term

  // create the list of sushi rolls
  $scope.player_data = window.player_data;

});
