// Difining Controller
angular.module('ipl').controller('player',demo);

function demo($scope,$firebaseObject) {
    var ref = firebase.database().ref();

    var syncObject = $firebaseObject(ref); 

    syncObject.$loaded().then(function(result) {
        $scope.data=result.MumbaiIndians;
})
};
