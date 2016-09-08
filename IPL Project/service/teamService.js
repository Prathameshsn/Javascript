
angular.module('myApp').service('teamServ', function () {

    var name;
    
    return {
        // method for chane URL
        setName : function (pname) {
        name = pname;
        console.log(url);
        },

        // method for retrive URL
        getName : function () {
            return url;
        }
    }
});