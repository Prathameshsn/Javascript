/** Title: JSON object representing a part of your musical album collection.
 *  Day:
 *  Created By: Prathamesh Naik.
 *  Purpose: Javascript Programing Practice.
 */


// Creating JSON for Album data
var Album = [
    {
    "a1000":
    {
    "artist":"A.R",
    "track":"Doe"},
    }, 

    {
    "a2000":
    {
    "artist":"Arjit",
    "track":"Smith"},
    },

];


var r=Album[0].a1000.artist + " " + Album[1].a2000.track;
document.getElementById("demo").innerHTML =r;


// function for modifying JSON data using aurguments
function modify(id,artist,track) 
{
    var a=Album[id].a1000.artist;
    var t=Album[id].a2000.track;

    a=artist;
    t=track;

    document.getElementById("demo").innerHTML=Album[0].a1000.artist + " " + Album[1].a2000.track;
}

// Passing Aurguments to modify function
modify(0,pa,ss);

