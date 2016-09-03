angular.module('myApp').controller('playercntrl',demo);

function demo($scope,$firebaseObject,teamServ) {

    var fbref = firebase.database().ref(teamServ.getTeam());
    var fbObject = $firebaseObject(fbref);

    fbObject.$loaded().then(function(obj) {
         $scope.data=obj;
    });
  
};

// function demo1($scope,$firebaseObject) {
//     var fbref = firebase.database().ref('team_info');
//     var fbObject = $firebaseObject(fbref);

//     fbObject.$loaded().then(function(obj) {
//         $scope.data1=obj;
//     });
  
// };


