var ipl = angular.module('ipl', ['ui.router']);

ipl.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('Teams/IPL.html');

    $stateProvider

    .state('MU', {
                url : '/MU',
                templateUrl : 'Teams/MU.html',
               
                
                
    })
    .state('RCB', {
                url : '/RCB',
                templateUrl : 'Teams/RCB.html',
                

    })
    .state('DD', {
                url : '/DD',
                templateUrl : 'Teams/DD.html',
                

    })
    .state('Pnj', {
                url : '/Pnj',
                templateUrl : 'Teams/Pnj.html',
                

    })
    .state('KKR', {
                url : '/KKR',
                templateUrl : 'Teams/KKR.html',
                

    })
    .state('DC', {
                url : '/DC',
                templateUrl : 'Teams/DC.html',
                

    })
    .state('CSK', {
                url : '/CSK',
                templateUrl : 'Teams/CSK.html',
                

    })
    .state('RR', {
                url : '/RR',
                templateUrl : 'Teams/RR.html',
                

    });
});