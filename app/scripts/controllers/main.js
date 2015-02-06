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

  		// Push getData key into .graphData.labels
  		// Push getData values into .graphData.datasets[0].data
  		angular.forEach($scope.expense, function(value, key) {
  			$scope.graphData.labels.push(key);
  			$scope.graphData.datasets[0].data.push(value);
  		});
  	};

  	$scope.init = function() {
  		$scope.addExpense();
  		console.log($scope.graphData.labels)
  		console.log($scope.graphData.datasets[0].data)
  	};

  	$scope.graphData = {
  		// Expense names get pushed into labels array
  		labels: [],

  		datasets: [
  			{
  				label: 'My First dataset',
	            fillColor: "rgba(151,187,205,0.5)",
	            strokeColor: "rgba(151,187,205,0.8)",
	            highlightFill: "rgba(151,187,205,0.75)",
	            highlightStroke: "rgba(151,187,205,1)",
	            data: [] // Expense amounts get pushed into data array
  			}
  		]
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
