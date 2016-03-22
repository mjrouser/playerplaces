

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
.controller('MainCtrl', function($scope, $location, $anchorScroll){
    console.log('something fired');
        $scope.gotoAbout = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('about');
      // call $anchorScroll()
      $anchorScroll();
    };
        $scope.gotoHowto = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('howTo');

      // call $anchorScroll()
      $anchorScroll();
    };

})
.controller('TableCtrl', function($scope, $http) {
  
  $scope.player_data = [];

  $http.get('data/players.json')
       .then(function(res){
          $scope.player_data = res.data;                
        });

  $scope.sortType = 'name'; // set the default sort type
  $scope.sortReverse = false;  // set the default sort order
  $scope.searchPlayer = '';     // set the default search/filter term

  // create the list of sushi rolls
  //$scope.player_data = window.player_data;

});
