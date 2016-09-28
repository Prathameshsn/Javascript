
angular.module('chatApp').service('loginServ', function () {

    var data;
  
    
    return {
        // method for change username
        setName : function (name) {
        data = name;
        console.log("set "+data);
        },
        
        // method for retrive username  
        getName : function () {
            console.log("get "+data);
            return data;
        },

        dbsetname : function (name) {
            data = name;    
        },

        dbgetname : function () {
            return data;
        }
    }
});