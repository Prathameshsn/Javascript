angular.module('chatApp',['ui.router','firebase'])
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
        
    })

    $stateProvider
    .state('integration', {
        url : '/integration',
        templateUrl : 'template/integration.html',
       
    })

    $stateProvider
    .state('setting', {
        url : '/setting',
        templateUrl : 'template/setting.html',
        
    })

    $stateProvider
    .state('people', {
        url : '/people',
        templateUrl : 'template/people.html',
        controller : 'userCntrl'
        
    })

    .state('champaigns', {
        url : '/champaigns',
        templateUrl: 'template/champaigns.html',
        

    })
    
    .state('inbox.new', {
        url : '/new',
        templateUrl: 'template/inbox/new.html',

    })

    .state('inbox.new.user', {
        url : '/chat',
        templateUrl: 'template/inbox/chat.html',
        controller : 'userCntrl'

    })

    .state('agent', {
        url : '/agent',
        templateUrl: 'template/setting/agent.html',

    });
    
    
});