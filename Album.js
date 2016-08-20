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

    // {
    // "xyz"{
    // "firstName":"Peter",
    // "lastName":"Jones"},
    // }
];


var r=Album[0].a1000.artist + " " + Album[1].a2000.track;

document.getElementById("demo").innerHTML =r;



function modify(id,artist,track) 
{
    var a=Album[id].a1000.artist;
    var t=Album[id].a2000.track;

    a=artist;
    t=track;

    document.getElementById("demo").innerHTML=Album[0].a1000.artist + " " + Album[1].a2000.track;
}


modify(0,pa,ss);

