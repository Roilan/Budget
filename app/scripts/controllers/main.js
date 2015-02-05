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

  	$scope.expenses = {
  		rent: '',
  		internet: '',
  		spotify: '',
  		hulu: ''
  	};

  	$scope.displayExpenses = function() {
  		console.log($scope.expenses.rent)
  		console.log($scope.expenses.internet)
  	};

   //  $scope.myData = {
  	// 	labels: ['Jan', 'Feb'],

  	// 	datasets: [
	  //       {
	  //           label: 'My First dataset',
	  //           fillColor: 'rgba(220,220,220,0.2)',
	  //           strokeColor: 'rgba(220,220,220,1)',
	  //           pointColor: 'rgba(220,220,220,1)',
	  //           pointStrokeColor: '#fff',
	  //           pointHighlightFill: '#fff',
	  //           pointHighlightStroke: 'rgba(220,220,220,1)',
	  //           data: [65, 59]
	  //       },
	  //       {
	  //           label: 'My Second dataset',
	  //           fillColor: 'rgba(151,187,205,0.2)',
	  //           strokeColor: 'rgba(151,187,205,1)',
	  //           pointColor: 'rgba(151,187,205,1)',
	  //           pointStrokeColor: '#fff',
	  //           pointHighlightFill: '#fff',
	  //           pointHighlightStroke: 'rgba(151,187,205,1)',
	  //           data: [28, 48]
	  //       }
  	// 	]
  	// };

  });
