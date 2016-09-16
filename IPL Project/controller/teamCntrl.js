
angular.module('myApp').controller('teamctrl',demo);

// Method for retrive firebase data
function demo($scope,$firebaseObject) {
    var fbref = firebase.database().ref('team_info');
    var fbObject = $firebaseObject(fbref);
    
    fbObject.$loaded().then(function(obj) {

        $scope.data=obj;
        
        
    });
};



