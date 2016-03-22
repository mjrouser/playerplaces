

// app.js
'use strict';

angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType = 'name'; // set the default sort type
  $scope.sortReverse = false;  // set the default sort order
  $scope.searchPlayer = '';     // set the default search/filter term

  // create the list of sushi rolls
  $scope.player_data = window.player_data;

});
