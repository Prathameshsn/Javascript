angular.module('chatApp',['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
    .state('inbox', {
        url : '/new?portfolioId',
        templateUrl : 'template/inbox.html',
        controller : 'nameCntrl'
    })

    $stateProvider
    .state('faq', {
        url : '/faq',
        templateUrl : 'template/faq.html',
        controller : 'nameCntrl'
    })

    $stateProvider
    .state('integration', {
        url : '/integration',
        templateUrl : 'template/integration.html',
        controller : 'nameCntrl'
    })

    $stateProvider
    .state('setting', {
        url : '/setting',
        templateUrl : 'template/setting.html',
        controller : 'nameCntrl'
    })

    $stateProvider
    .state('people', {
        url : '/people',
        templateUrl : 'template/people.html',
        controller : 'nameCntrl'
    })

    .state('champaigns', {
        url : '/champaigns',
        templateUrl: 'template/champaigns.html',
        controller : 'nameCntrl'

    })
    
    .state('inbox.new', {
        url : '/new',
        templateUrl: 'template/inbox/new.html',

    })

    .state('inbox.new.user', {
        url : '/chat',
        templateUrl: 'template/inbox/chat.html',

    });
    
});