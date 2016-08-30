/**Title:      IPL APP Project
 * Created By: Prathamesh Naik.
 * Day:        27-8-2016.
 * Purpose:    Angular Javascriipt Practice
 */

var ipl = angular.module('ipl', ['ui.router']);

ipl.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/IPL');

    $stateProvider

    // Different URL for Different State
    .state('IPL', {
                url : '/IPL',
                templateUrl : 'IPL.html'                           
    })
    .state('MU', {
                url : '/MU',
                templateUrl : 'Templates/MU.html'                       
    })
    .state('RCB', {
                url : '/RCB',
                templateUrl : 'Templates/RCB.html'           
    })
    .state('DD', {
                url : '/DD',
                templateUrl : 'Templates/DD.html'
                
    })
    .state('Pnj', {
                url : '/Pnj',
                templateUrl : 'Templates/Pnj.html'
                
    })
    .state('KKR', {
                url : '/KKR',
                templateUrl : 'Templates/KKR.html'
                
    })
    .state('DC', {
                url : '/DC',
                templateUrl : 'Templates/DC.html',
                

    })
    .state('CSK', {
                url : '/CSK',
                templateUrl : 'Templates/CSK.html'
                
    })
    .state('RR', {
                url : '/RR',
                templateUrl : 'Templates/RR.html'          

    });
});




// var i=0;

// function print() {
//     document.write("ff");
// }




var playersRef = firebase.database().ref('Mumbai Indians_info');      
playersRef.on("child_added", function(data, prevChildKey) {

    var newPlayer = data.val();
            
    a = [newPlayer.team_name,newPlayer.team_captain,newPlayer.team_coach,newPlayer.team_owner,newPlayer.team_home_venue,newPlayer];
                                        
    // document.getElementById("m1").innerHTML= a[0];
    document.getElementById("m2").innerHTML= a[1];
    document.getElementById("m3").innerHTML= a[2];
    document.getElementById("m4").innerHTML= a[3];
    document.getElementById("m5").innerHTML= a[4];
                    
}); 

var playersRef = firebase.database().ref('Delhi DareDevils_info');      
playersRef.on("child_added", function(data, prevChildKey) {

    var newPlayer = data.val();
            
    a = [newPlayer.team_name,newPlayer.team_captain,newPlayer.team_coach,newPlayer.team_owner];
                                        
    document.getElementById("d1").innerHTML= a[0];
    document.getElementById("d2").innerHTML= a[1];
    document.getElementById("d3").innerHTML= a[2];
    document.getElementById("d4").innerHTML= a[3];
                    
}); 

var playersRef = firebase.database().ref('Kings XI Punjab_info');      
playersRef.on("child_added", function(data, prevChildKey) {

    var newPlayer = data.val();
            
    a = [newPlayer.team_name,newPlayer.team_captain,newPlayer.team_coach,newPlayer.team_owner];
                                        
    document.getElementById("p1").innerHTML= a[0];
    document.getElementById("p2").innerHTML= a[1];
    document.getElementById("p3").innerHTML= a[2];
    document.getElementById("p4").innerHTML= a[3];
                    
}); 

var playersRef = firebase.database().ref('Kolkata Knight Riders_info');      
playersRef.on("child_added", function(data, prevChildKey) {

    var newPlayer = data.val();
            
    a = [newPlayer.team_name,newPlayer.team_captain,newPlayer.team_coach,newPlayer.team_owner];
                                        
    document.getElementById("k1").innerHTML= a[0];
    document.getElementById("k2").innerHTML= a[1];
    document.getElementById("k3").innerHTML= a[2];
    document.getElementById("k4").innerHTML= a[3];
                    
}); 


var playersRef = firebase.database().ref('Sunrisers Hyderabad_info');      
playersRef.on("child_added", function(data, prevChildKey) {

    var newPlayer = data.val();
            
    a = [newPlayer.team_name,newPlayer.team_captain,newPlayer.team_coach,newPlayer.team_owner];
                                        
    document.getElementById("h1").innerHTML= a[0];
    document.getElementById("h2").innerHTML= a[1];
    document.getElementById("h3").innerHTML= a[2];
    document.getElementById("h4").innerHTML= a[3];
                    
}); 


var playersRef = firebase.database().ref('Royal Challengers Bangalore_info');      
playersRef.on("child_added", function(data, prevChildKey) {

    var newPlayer = data.val();
            
    a = [newPlayer.team_name,newPlayer.team_captain,newPlayer.team_coach,newPlayer.team_owner];
                                        
    document.getElementById("r1").innerHTML= a[0];
    document.getElementById("r2").innerHTML= a[1];
    document.getElementById("r3").innerHTML= a[2];
    document.getElementById("r4").innerHTML= a[3];
                    
}); 


var playersRef = firebase.database().ref('Rising Pune Supergiants_info');      
playersRef.on("child_added", function(data, prevChildKey) {

    var newPlayer = data.val();
            
    a = [newPlayer.team_name,newPlayer.team_captain,newPlayer.team_coach,newPlayer.team_owner];
                                        
    document.getElementById("c1").innerHTML= a[0];
    document.getElementById("c2").innerHTML= a[1];
    document.getElementById("c3").innerHTML= a[2];
    document.getElementById("c4").innerHTML= a[3];
                    
}); 


var playersRef = firebase.database().ref('Mumbai Indians_info');      
playersRef.on("child_added", function(data, prevChildKey) {

    var newPlayer = data.val();
            
    a = [newPlayer.team_name,newPlayer.team_captain,newPlayer.team_coach,newPlayer.team_owner];
                                        
    document.getElementById("dd").innerHTML= a[0];
    document.getElementById("dd1").innerHTML= a[1];
    document.getElementById("dd2").innerHTML= a[2];
    document.getElementById("dd3").innerHTML= a[3];
                    
}); 


var playersRef = firebase.database().ref('MumbaiIndians');      
playersRef.on("child_added", function(data, prevChildKey) {

    var newPlayer = data.val();
            
    var a = newPlayer.player_name;
                                        
    document.getElementById("dd").innerHTML= a;
   
                    
}); 


