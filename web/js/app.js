angular.module('summerproject',['controllers']).
	config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', {title: 'Home', templateUrl: 'partials/home.html', controller: 'ChooseAccountCtrl'});
	}]);