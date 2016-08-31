
angular.module('myApp').controller('team_ctrl',demo1);
function demo1($scope,$firebaseObject){
var fbref = firebase.database().ref();
var fbObject = $firebaseObject(fbref);

  fbObject.$loaded().then(function(obj){

    $scope.data=obj.MumbaiIndians;
    $scope.data1=obj.MumbaiIndians_info;

  });
  
};



