'use strict';

/**
 * @ngdoc overview
 * @name budgetApp
 * @description
 * # budgetApp
 *
 * Main module of the application.
 */
angular.module('budgetApp', ['ui.router', 'chart.js', 'budgetApp.controllers', 'budgetApp.services'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		// sets unmatched url to root dir
		//$urlRouterProvider.otherwise('');

		// sets budgetState
		$stateProvider
			.state('budgetState', {
				url: '/budget',
				controller: 'BudgetController',
				templateUrl: 'views/budget.html'
			});

		// sets to html5mode
		$locationProvider.html5Mode(true);
	});
