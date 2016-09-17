
angular.module('chatApp').controller('userCntrl',demo);

function demo($scope,$firebaseObject) {

    // retrive firebase users data
    var fbref = firebase.database().ref('Users');
    var fbObject = $firebaseObject(fbref);
    fbObject.$loaded().then(function(obj) {
        $scope.data=obj;
    });

    var model = document.getElementById('myModal');
    
    //function for Display chat box
    $scope.printdialog = function(name) {
        $scope.username = name;
        model.style.display = "block";       
    }

     // retrive firebase messages data
    var fbrefobj = firebase.database().ref('Messages');
    var fbObjectobj = $firebaseObject(fbrefobj);
    fbObjectobj.$loaded().then(function(obj) {
        $scope.data1 = obj;
    })


    //function for User click on close button
    $scope.close = function() {
        model.style.display = "none";
    }


    // function after send button click
    $scope.printmsg = function () {
    //Dispaly sending message to chatbox
    $scope.msg = $scope.msgbox;
    // store messages in database    
    var msg = fbrefobj.push();
    msg.set({'sendmsg':$scope.msg});
    }
};
