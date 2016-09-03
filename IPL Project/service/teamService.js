angular.module('myApp').service('teamServ', function () {

    var team;
    
    return {
        setTeam : function (teamName) {
        team = teamName.replace(/\s/g, '');
        },

        getTeam: function () {
            return team;
        }
    }
});