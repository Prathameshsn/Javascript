
angular.module('myApp').controller('teamctrl',demo);

function demo($scope,$firebaseObject,teamServ) {
    var fbref = firebase.database().ref('team_info');
    var fbObject = $firebaseObject(fbref);

    fbObject.$loaded().then(function(obj) {

        $scope.data=obj;
        
        $scope.changename = function(name) {
          
            var teamname = name;
            teamServ.setTeam(teamname);
        }

    });
  
};



