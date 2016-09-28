
angular.module('chatApp').controller('userCntrl',demo);


function demo($scope,$firebaseObject,loginServ,$stateParams) {

    $scope.username = loginServ.getName();

       // Default headername
    $scope.headerName='Inbox';
       // change headername
    $scope.printName = function (headerName) {
        $scope.headerName = headerName;
    }

        // get model of logoutbox
    var logoutmodel = document.getElementById('logoutmodel');
        // display logout window
    $scope.printlogout = function() {
        logoutmodel.style.display = "block";
     
    }
    
        // retrive firebase data of users
    var fbref = firebase.database().ref('Users');
    var fbObject = $firebaseObject(fbref);
    fbObject.$loaded().then(function(obj) {
         $scope.data=obj;
    });

        // get model of chatbox
    var model = document.getElementById('myModal');

        // function for Display chat box
    $scope.printdialog = function(name) {
        $scope.username = name;
        model.style.display = "block";
        loginServ.dbsetname($scope.username);
    }

        // retrive firebase messages data
    var fbrefobj = firebase.database().ref(loginServ.getName());

    var name = firebase.database().ref(loginServ.getName());
    var fbObjectobj = $firebaseObject(name);
    fbObjectobj.$loaded().then(function(obj) {
        $scope.msgdata = obj;
    })

        // function for click on close button of chatbox
    $scope.close = function() {
        model.style.display = "none";
    }

        // function after send button click of chatbox
    $scope.printmsg = function () {
        // Dispaly sending message to chatbox in body
    $scope.msg = $scope.msgbox;
        // store messages in database    
    var msg = fbrefobj.push();
    msg.set({'sendmsg':$scope.msg});
    } 

        // get model of signout window
    var logoutmodel = document.getElementById('logoutmodel');
        //function for click on close button of signout window
    $scope.closeit = function() {
        logoutmodel.style.display = "none";
    }
};
