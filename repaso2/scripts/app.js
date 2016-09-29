angular.module("myApp", ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				template: 'Contenido Inicial <keyboard></keyboard>',
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
