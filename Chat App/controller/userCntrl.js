
angular.module('chatApp').controller('userCntrl',demo);

// Method for retrive firebase data
function demo($scope,$firebaseObject) {
    var fbref = firebase.database().ref('Users');
    var fbObject = $firebaseObject(fbref);

    fbObject.$loaded().then(function(obj) {
        $scope.data=obj;  
    });

    var model = document.getElementById('myModal');
    // Display chat box
    $scope.printdialog = function(name) {
        $scope.username = name;
        console.log(name)
        model.style.display = "block";       
    }

    // User click on close button
    $scope.close = function() {
        model.style.display = "none";
    }
    
};
