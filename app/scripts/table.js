'use strict';

angular.module('sortApp')
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