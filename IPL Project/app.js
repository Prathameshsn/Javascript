angular.module('myApp',['ui.router','firebase'])
		.config(function($stateProvider,$urlRouterProvider) { 
			$urlRouterProvider.otherwise('/home');
			$stateProvider
			.state('home', {
				url:'/home',
				templateUrl:'template/home.html',
				controller:'teamctrl',
				
			})
			.state('team', {
				url:'/team',
				templateUrl:'template/team.html',
				controller:'playercntrl'
			})
			// .state('player', {
			// 	url:'/player',
			// 	templateUrl:'template/player.html',
			// 	// controller:'playercntrl'
			// })

		});
