'use strict';

angular.module('budgetApp.controllers',[])
  .controller('BudgetController', function($scope, $timeout, chartService) {

  	$scope.expense = {
  		rent: '',
  		internet: '',
  		spotify: '',
  		hulu: '',
      nyseg: '',
      gym: '',
      carwash: '',
      debt: '',
      food: '',
      gas: '',
      insurance: ''
  	};

  	$scope.addExpense = function() {
        chartService.addExpense($scope.expense);
  	};

  	$scope.clear = function() {

        chartService.clear();

        $scope.labels = chartService.labels;
        $scope.data = chartService.data;        
  	};

    $scope.updateData = function() {
        // needed to wrap inside $scope.$apply  
        // otherwise, doesn't update the scope without a second click
        $timeout(function() {
            $scope.labels = chartService.labels;
            $scope.data = chartService.data;
        }, 1);
    };

  	$scope.init = function() {
        $scope.updateData();
        $scope.addExpense();
    };

    $scope.log = function() {
        // console.log('chartService.labels: ' + chartService.labels);
        // console.log('chartService.data: ' + chartService.data);
        // console.log('scope.labels: ' + $scope.labels);
        // console.log('scope.data: ' + $scope.data);
        console.log($scope.expense);
    };

  });
