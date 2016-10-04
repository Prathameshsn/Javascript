
 angular.module('chatApp',['ui.router','firebase','LocalStorageModule'])
.config(function($stateProvider,$urlRouterProvider,localStorageServiceProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login', {
        url:'/login',
        templateUrl : 'template/login.html',
        controller : 'loginCntrl' 
    })

    .state('home', {
        url: '/home',
        templateUrl : 'template/home.html',
        controller : 'userCntrl'
    })

    .state('home.inbox', {
        // url : '/new?portfolioId',
        templateUrl : 'template/inbox.html',
        controller : 'nameCntrl'
    })

    .state('home.inbox.new', {
        url : '/new',
        templateUrl: 'template/inbox/new.html',
       
    })

    .state('home.faq', {
        url : '/faq',
        templateUrl : 'template/faq.html',
    })
    
    .state('home.integration', {
        url : '/integration',
        templateUrl : 'template/integration.html', 
    })

    .state('home.setting', {
        url : '/setting',
        templateUrl : 'template/setting.html',  
        controller: 'userCntrl'
    })

    .state('home.people', {
        url : '/people',
        templateUrl : 'template/people.html',
        controller : 'userCntrl'  
    })

    .state('home.champaigns', {
        url : '/champaigns',
        templateUrl: 'template/champaigns.html',
    })

    .state('home.agent', {
        url : '/agent',
        templateUrl: 'template/setting/agent.html',
    })

    .state('youracc', {
        url : '/youracc',
        templateUrl: 'template/setting/youracc.html',
    })

    .state('home.inbox.new.user', {
        url : '/chat',
        templateUrl: 'template/inbox/chat.html',
        controller : 'userCntrl'
    })

    .state('signup', {
        url : '/signup',
        templateUrl: 'template/signup.html',
        controller : 'loginCntrl' 
    })

    
});