
angular.module('chatApp').controller('loginCntrl', demo);

function demo($scope, loginServ) {

    var fbref = firebase.database().ref('Admin');

    // Function after new admin signup
    $scope.signup = function () {

        var fbObject = $firebaseObject(fbref);
        fbObject.$loaded().then(function (obj) {

            for (var i = 0; i < obj.length; i++) {
                if ($scope.username == obj.AdminName[i]) {
                    alert("Username already exist");
                }
            }
        });
        // Push username to database
        var msg = fbref.push();
        msg.set({ 'AdminName': $scope.username, 'Status': 'offline' });
    }


    // Function after admin login
    $scope.login = function () {
        fbref.orderByChild('AdminName').equalTo($scope.username).on("child_added", function (data) {
            var key = data.key;
            fbref.child(key).update({ 'AdminName': $scope.username, 'Status': 'online' })
        })

        // Message window(Successfully login)
        var x = document.getElementById("snackbar")
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 1500);
    }
}
