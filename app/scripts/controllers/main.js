'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
