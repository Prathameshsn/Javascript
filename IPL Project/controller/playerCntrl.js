
angular.module('myApp').controller('playercntrl',demo);

/**
 * Method for retrive firebase data
 *  */
function demo($scope,$firebaseObject,$stateParams) {

    $scope.portfolioId = $stateParams.portfolioId;

    // Replace method for remove space from string
    var tname = $scope.portfolioId.replace(/\s/g, '');
    var fbref = firebase.database().ref(tname);
    var fbObject = $firebaseObject(fbref);

    fbObject.$loaded().then(function(obj) {
        $scope.data = obj;
    });

    // Replace method for add '_' to string
    var tname1 = $scope.portfolioId.replace(/\s/g, '_');
    var fbref1 = firebase.database().ref(tname1);
    var fbObject1 = $firebaseObject(fbref1);
    
    fbObject1.$loaded().then(function(obj) {
        $scope.data1 = obj;
    });


    $scope.changeName = function (name) {
        fbref.orderByChild('player_name').equalTo(name).on("child_added",function (data) {
            $scope.data2 = data.val();
        })    
    }

};






