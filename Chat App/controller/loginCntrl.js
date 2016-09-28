
angular.module('chatApp').controller('loginCntrl',demo);

function demo($scope,loginServ) {
   
    var fbref = firebase.database().ref('Users');
    $scope.printName = function () {
    
            // Push username to database
        var msg = fbref.push();
        msg.set({'username':$scope.username});

        // localStorageService.set('username', $scope.username);
        // console.log(localStorageService.get('username'));

        loginServ.setName($scope.username);
        // $state.go('home');
        // console.log(loginServ.setName($scope.username))
    }
}