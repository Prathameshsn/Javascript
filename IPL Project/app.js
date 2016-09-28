
angular.module('myApp',['ui.router','firebase',])
		.config(function($stateProvider,$urlRouterProvider) { 
				$urlRouterProvider.otherwise('/home');
			$stateProvider
			.state('home', {
				url:'/home',
				templateUrl:'template/home.html',
				controller:'teamctrl'
			})

			.state('team', {
				url:'/team?portfolioId',	
				templateUrl:'template/team.html',
				controller:'playercntrl'
			})

			.state('team.player', {
				url:'/player/portfolioId',
				templateUrl:'template/player.html',
				controller:'playercntrl'
			})

		});
