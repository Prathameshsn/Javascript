angular.module('myApp',['ui.router','firebase'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');
			$stateProvider
			.state('home',{
				url:'/home',
				templateUrl:'template/home.html',
				// controller:'team_ctrl'
			})
			.state('team',{
				url:'/team',
				templateUrl:'template/team.html',
				controller:'team_ctrl'
			})
		});
