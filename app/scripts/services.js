'use strict';


angular.module('budgetApp.services', [])
	.service('chartService', function() {

		// Push into array if .labels is less than .expense
  		// Otherwise it will continue to push into the array

  		// Push expense key / values arrays for chart
  		var self = this;
		this.addExpense = function(expense) {
			var expenseObjLength = Object.keys(expense).length;

			if (self.labels < expenseObjLength) {
	  			angular.forEach(expense, function(value, key) {
	  				self.labels.push(key);
	  				self.data[0].push(value);
	  			});
  		 	} else {
  		 		self.clear();
  		 		angular.forEach(expense, function(value, key) {
	  				self.labels.push(key);
	  				self.data[0].push(value);
	  			});
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


