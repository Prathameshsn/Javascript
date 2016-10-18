
angular.module('chatApp').service('loginServ', function () {

    var data;
    var newkey;
  
    
    return {
        // method for change username
        setName : function (name) {
        data = name;
        },
        
        // method for retrive username
        getName : function () {
            return data;
        },

        // setKey : function (key) {
        //     newkey = key;
        // },

        // getKey : function () {
        //     return newkey;
        // }
    }
});