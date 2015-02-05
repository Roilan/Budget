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

  	$scope.expenseName = {
  		rent: '',
  		internet: '',
  		spotify: '',
  		hulu: ''
  	};

  	$scope.addExpenseNames = function() {

  		angular.forEach($scope.expenseName, function(value, key) {
  			$scope.graphData.labels.push(key);
  		});

  	};

  	$scope.addExpensesAmounts = function() {
  		// Push getData key:values into $scope.graphData.datasets[0].data


  	};

  	$scope.displayExpenses = function() {
  		$scope.addExpenseNames();
  		//console.log($scope.graphData.labels)
  		//console.log($scope.graphData.datasets[0].data)
  		//console.log(Object.keys($scope.getData))
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
