'use strict';

/**
 * @ngdoc function
 * @name budgetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the budgetApp
 */
angular.module('budgetApp')
  .controller('MainCtrl', function($scope) {

  	$scope.expense = {
  		rent: '',
  		internet: '',
  		spotify: '',
  		hulu: ''
  	};

  	$scope.addExpense = function() {

  		// Push into array if .labels is less than .expense
  		// Otherwise it will continue to push into the array

  		// Push expense key / values arrays for chart

  		var expenseObjLength = Object.keys($scope.expense).length;

  		if ($scope.labels < expenseObjLength) {
  			angular.forEach($scope.expense, function(value, key) {
  				$scope.labels.push(key);
  				$scope.data[0].push(value);
  			});
  		} else {
  			$scope.clear();

  			angular.forEach($scope.expense, function(value, key) {
  				$scope.labels.push(key);
  				$scope.data[0].push(value);
  			});
  		}
  	};

  	$scope.clear = function() {
  		$scope.labels = [];
  		$scope.data[0] = [];
  	};

  	// Expense names get pushed into labels array 
  	$scope.labels = [];

  	$scope.series = ['Series A', 'Series B'];

  	// Expense amounts get pushed into data array
  	// data array takes an array of values
  	$scope.data = [
    	[]
  	];

  	$scope.init = function() {
  		$scope.addExpense();
  	};

  });
