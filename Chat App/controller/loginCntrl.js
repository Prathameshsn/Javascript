
angular.module('chatApp').controller('loginCntrl',demo);

function demo($scope,loginServ) {
   
    var fbref = firebase.database().ref('Admin');
    $scope.printName = function () {
            // Push username to database
        var msg = fbref.push();
        msg.set({'AdminName':$scope.username}); 
    }  

    $scope.signup = function () {
        loginServ.setName($scope.username); 
    }
}