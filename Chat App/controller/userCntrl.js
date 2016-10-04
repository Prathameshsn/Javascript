
angular.module('chatApp').controller('userCntrl', demo);


function demo($scope, $firebaseObject, loginServ, $stateParams, localStorageService) {

    $scope.username = loginServ.getName();
    // Default headername
    $scope.headerName = 'Inbox';
    // get model of chatbox
    var model = document.getElementById('myModal');
    // get model of logoutbox
    var logoutmodel = document.getElementById('logoutmodel');
    

    // change headername
    $scope.printName = function (headerName) {
        $scope.headerName = headerName;
    }


    // display logout window
    $scope.printlogout = function () {
        logoutmodel.style.display = "block";
    }


    // retrive firebase data of users
    var fbref = firebase.database().ref('Users');
    var fbObject = $firebaseObject(fbref);
    fbObject.$loaded().then(function (obj) {
        $scope.data = obj;
    });


    // function for Display chat box
    $scope.printdialog = function (name) {
        $scope.username = name;
        // retrive firebase messages data
        var userAdminName = loginServ.getName().concat(name)
        var fbrefobj = firebase.database().ref(userAdminName);
        var name = firebase.database().ref(userAdminName);
        var fbObjectobj = $firebaseObject(name);
        fbObjectobj.$loaded().then(function (obj) {
            $scope.msgdata = obj;
        })
        model.style.display = "block";
        localStorageService.set('obj', userAdminName)
    }


    // function for click on close button of chatbox
    $scope.close = function () {
        model.style.display = "none";
    }


    // function after send button click of chatbox
    $scope.printmsg = function () {
        // Dispaly sending message to chatbox in body
        $scope.msg = $scope.msgbox;
        // store messages in database
        var fbrefobj = firebase.database().ref(localStorageService.get('obj'));
        var msg = fbrefobj.push();
        msg.set({ 'sendmsg': $scope.msg });
    }


    //function for click on close button of signout window
    $scope.closeit = function () {
        logoutmodel.style.display = "none";
    }
};
