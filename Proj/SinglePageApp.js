var singlePage = angular.module('singlePage', ['ui.router']);

singlePage.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Home');

    $stateProvider

    .state('home', {
                url : '/Home',
                templateUrl : 'Pages/Home.html'
                // controller : 'MyModule'    
    })
    .state('about', {
                url : '/about',
                templateUrl : 'Pages/About.html',
                // controller : 'MyModule1'

    })
    .state('contact', {
                url : '/contact',
                templateUrl : 'Pages/Contact.html',
                // controller : 'MyModule2'

    });
});


	// singlePage.controller('MyModule', function($scope) {
	// 	// create a message to display in our view
	// 	$scope.message = 'Everyone come and see how good I look!';
    //     console.log($scope.message)
	// });

    // singlePage.controller('MyModule1', function($scope) {
	// 	// create a message to display in our view
	// 	$scope.message = 'Everyone come and see ';
    //     console.log($scope.message)
	// });

    // singlePage.controller('MyModule2', function($scope) {
	// 	// create a message to display in our view
	// 	$scope.message = 'Everyone !';
    //     console.log($scope.message)
	// });
