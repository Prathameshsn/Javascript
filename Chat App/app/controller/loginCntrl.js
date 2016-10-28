
angular.module('chatApp').controller('loginCntrl', demo);

function demo($scope, loginServ) {

    var fbref = firebase.database().ref('Admin');

    // Generate a random alphanumric key
    function generatekey() {
        var length = 32;
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-';
        var result = '';

        for (var i = length; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }


    // Function after new admin signup
    $scope.signup = function () {

        // Push username to database
        var msg = fbref.push();
        msg.set({
            'AdminName': $scope.username, 'Status': 'offline', 'Email': $scope.email, 'Password': $scope.pwd,
            'Appname': $scope.appname, 'Company': $scope.company, 'Number': $scope.num,
            'Appid': generatekey(), 'Appkey': generatekey(),
        });
    }


    // Function after admin login
    $scope.login = function () {

        var username = [];
        fbref.orderByChild("AdminName").on('child_added', function (snapshot) {
            var event = snapshot.AdminName.val();
            alert(event)
        })

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
