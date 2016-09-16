
angular.module('chatApp').controller('nameCntrl',demo);

function demo($scope, $stateParams) {

    $scope.headerName='Inbox';
    
    $scope.printName = function (headerName) {
        $scope.headerName = headerName;
       
    }

};