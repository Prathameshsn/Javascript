
angular.module('chatApp').controller('userCntrl', demo);

function demo($scope, $firebaseObject, loginServ, $stateParams, localStorageService) {

    // Default headername
    $scope.headerName = 'Inbox';
    // change headername
    $scope.printName = function (headerName) {
        $scope.headerName = headerName;
    }


    // get model of logoutbox
    var logoutmodel = document.getElementById('logoutmodel');
    // display signout window
    $scope.printlogout = function () {
        logoutmodel.style.display = "block";
    }
    // click on close button of signout window
    $scope.closeit = function () {
        logoutmodel.style.display = "none";
    }


    // retrive firebase data of users
    var fbref = firebase.database().ref('Users');
    var fbObject = $firebaseObject(fbref);
    fbObject.$loaded().then(function (obj) {
        $scope.data = obj;
    });


    // Display name of user on signout window 
    var admin = firebase.database().ref('Admin');
    admin.orderByChild('Status').equalTo('online').on("child_added", function (data) {
        $scope.name = data.val().AdminName;
        // pass username to servise
        loginServ.setName($scope.name);
    })
    


    // get model of chatbox
    var model = document.getElementById('myModal');
    // Function after username clicked
    $scope.printdialog = function (name) {
        $scope.username = name;
        // retrive firebase messages data
        var userAdminName = loginServ.getName().concat(name);
        var fbrefobj = firebase.database().ref(userAdminName);
        var name = firebase.database().ref(userAdminName);
        var fbObjectobj = $firebaseObject(name);
        fbObjectobj.$loaded().then(function (obj) {
            $scope.msgdata = obj;
        })
        // Display chatbox
        model.style.display = "block";
        localStorageService.set('obj', userAdminName)
    }

    
    // Function for click on close button of chatbox
    $scope.close = function () {
        model.style.display = "none";
    }


    // Change status to offline after logout
    $scope.signout = function () {
        var fbref = firebase.database().ref('Admin');
        fbref.orderByChild('AdminName').equalTo(loginServ.getName()).on("child_added", function (data) {
            var key = data.key;
            fbref.child(key).update({ 'AdminName': loginServ.getName(), 'Status': 'offline' })
        })
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


    var agent = document.getElementById('agent');
    $scope.edit = function () {
        agent.style.display = "block";
    }
     $scope.closeedit = function () {
        agent.style.display = "none";
    }

};
