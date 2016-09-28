
angular.module('myApp').controller('teamctrl',demo);

        // Method for retrive firebase data
function demo($scope,$firebaseObject) {
    
    var fbref = firebase.database().ref('team_info');
    var fbObject = $firebaseObject(fbref);
    fbObject.$loaded().then(function(obj) {
        $scope.data=obj;
    });

        // Method for retrive firebase data
    var fbrf = firebase.database().ref('Messages');
    var fbObj = $firebaseObject(fbrf);
    fbObj.$loaded().then(function(obj) {
        $scope.msgdata=obj;
        
    });

        // variable to get model
    var model = document.getElementById('myModal');
        //function for Display chat box
    $scope.printdialog = function() {
        model.style.display = "block";       
    }

        //function for click on close button of chatbox
    $scope.close = function() {
        model.style.display = "none";
    }

    // function after send button click
    $scope.printmsg = function () {
        
        $scope.msg = $scope.msgbox;
        $scope.username = "prathamesh";
        console.log($scope.username)

        var msg = fbrf.push();
        msg.set({'sendmsg':$scope.msg,'username':$scope.username});
    }
};



