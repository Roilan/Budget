'use strict';


angular.module('budgetApp.services', [])
	.service('chartService', function() {

		// Push into array if .labels is less than .expense
  		// Otherwise it will continue to push into the array

  		// Push expense key / values arrays for chart
  		var self = this;
		this.addExpense = function(expense) {
			var expenseObjLength = Object.keys(expense).length;

			// loops over $scope.expense and pushes into labels/data
			var pushExpense = function() {
				angular.forEach(expense, function(value, key) {
					self.labels.push(key);
					self.data[0].push(value);
				});
			};

			if (self.labels < expenseObjLength) {
	  			pushExpense();
  		 	} else {
  		 		self.clear();
  		 		pushExpense();
  		 	}
		};

		this.clear = function() {
			self.labels = [];
			self.data = [ [] ];
		};

		//chart data
		// Expense names get pushed into labels array
		this.labels = [];

		// Expense amounts get pushed into data array
  		// data array takes an array of values
		this.data = [
			[]
		];
	});


