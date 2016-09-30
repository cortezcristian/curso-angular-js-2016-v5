angular.module("myApp", ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: './inicio.html',
				controller: 'InicioCtrl'
			})
			.when('/contacto', {
				templateUrl: './contacto.html',
				controller: 'ContactoCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
