'use strict';


angular.module('budgetApp.services', [])
	.service('chartService', function() {
		var self = this;

		// income data 
		this.income = [];

		// chart data
		// expense names get pushed into labels array
		this.labels = [];

		// expense amounts get pushed into data array
  		// data array takes an array of values
		this.data = [ [] ];


	// start expense methods

  	// push expense key / values arrays for chart
		this.addExpense = function(expense) {
			var expenseObjLength = Object.keys(expense).length;

			// loops over $scope.expense and pushes into labels/data
			var pushExpense = function() {
				angular.forEach(expense, function(value, key) {
					self.labels.push(key);
					
					if(value === null) {
						value = 0;
					}
					
					self.data[0].push(value);
				});
			};

			// push into array if .labels is less than .expense
			// otherwise it will continue to push into the array
			if(self.labels < expenseObjLength) {
	  			pushExpense();
  		 	} else {
  		 		self.clear();
  		 		pushExpense();
  		 	}
		};

		// calculates total expenses from data array
		// and returns it for the view
		this.calcTotalExpenses = function() {
			var totalExpense = 0;
			var expenseData = self.data[0];

			for(var i = 0; i < expenseData.length; i++) {
				totalExpense += expenseData[i];
			}

			return '$' + totalExpense;
		};

	// end expense methods


	// start income methods

		// similiar to the addExpense method
		this.addIncome = function(income) {
			var incomeObjLength = Object.keys(income).length;

			// loops over $scope.income and pushes into income array
			var pushIncome = function() {
				angular.forEach(income, function(value) {
					if(value === null) {
						value = 0;
					}
					
					self.income.push(value);
				});
			};

			if(self.income < incomeObjLength) {
	  		pushIncome();
  		} else {
  			self.clear();
  			pushIncome();
  		}
		};

		this.calcTotalIncome = function() {
			var totalIncome = 0;
			var incomeData = self.income;

			for(var i = 0; i < incomeData.length; i++) {
				totalIncome += incomeData[i];
			}

			return '$' + totalIncome;
		};

	// end income methods

		this.clear = function() {
			self.labels = [];
			self.data = [ [] ];
			self.income = [];
		};

	});


