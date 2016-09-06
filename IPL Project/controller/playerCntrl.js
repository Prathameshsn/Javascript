
angular.module('myApp').controller('playercntrl',demo);

function demo($scope,$firebaseObject,$stateParams) {

    $scope.portfolioId = $stateParams.portfolioId;
    var tname = $scope.portfolioId.replace(/\s/g, '');

    var fbref = firebase.database().ref(tname);
    var fbObject = $firebaseObject(fbref);

    // console.log( portfolioId );
    fbObject.$loaded().then(function(obj) {

        $scope.data = obj;
       
    });

    
  
};






