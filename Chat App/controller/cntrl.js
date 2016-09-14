
angular.module('chatApp').controller('nameCntrl',demo);

function demo($scope, $stateParams) {

    $scope.headerName='Inbox';
    
    $scope.printName = function (Inbox) {
        $scope.headerName=Inbox;
        console.log()
    }

};