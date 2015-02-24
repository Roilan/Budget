'use strict';

/**
 * @ngdoc overview
 * @name budgetApp
 * @description
 * # budgetApp
 *
 * Main module of the application.
 */
angular.module('budgetApp', ['ui.router', 'chart.js', 'budgetApp.controllers', 'budgetApp.services', 'budgetApp.filters'])
	.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		// redirects to home state
		$urlRouterProvider.otherwise('/');
		$urlRouterProvider.when('/', '/home');
		
		// sets budgetState
		$stateProvider
			.state('budgetState', {
				url: '/budget',
				controller: 'BudgetController',
				templateUrl: 'views/budget.html'
			})
			.state('homeState', {
				url: '/home',
				templateUrl: 'views/home.html'
			});

		// sets to html5mode
		$locationProvider.html5Mode(false);
	});
