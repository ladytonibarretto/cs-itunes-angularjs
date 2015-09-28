'use strict';

// Declare app level module which depends on views, and components
var iTunes = angular.module('iTunes', [
							'ngRoute',
							'ngAudio']);

iTunes.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider
	.when('/search', {
		templateUrl: 'iTunes/search.html',
		controller: 'SearchCtrl'
	})
	.when('/favorites', {
		templateUrl: 'iTunes/favorites.html',
		controller: 'FaveCtrl'
	})	
	.otherwise({redirectTo: '/favorites'});

	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);