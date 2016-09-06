
angular.module('myApp').controller('teamctrl',demo);

function demo($scope,$firebaseObject) {
    var fbref = firebase.database().ref('team_info');
    var fbObject = $firebaseObject(fbref);
    // console.log( portfolioId );
    fbObject.$loaded().then(function(obj) {

        $scope.data=obj;
        
    });
  
};



