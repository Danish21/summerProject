angular.module('summerproject',['ngRoute', 'ngResource','summerproject.controllers']).
	config(['$routeProvider', function($routeProvider){
		'use strict';
		$routeProvider.when('/', {title: 'Home', templateUrl: 'partials/temp1.html', controller: 'tempCtrl'});
	}]);