/** Title: JSON object representing a part of your musical album collection.
 *  Day:
 *  Created By: Prathamesh Naik.
 *  Purpose: Javascript Programing Practice.
 */


// Creating JSON for Album data
var Album = {
                "1245": {
                    "artist": "Robert Palmer",
                    "tracks": []
                },

                "2468": {
                    "album": "1999",
                    "artist": "Prince",
                    "tracks": [
                        "1999",
                        "Little Red Corvette"
                    ]
                },

                "2548": {
                    "album": "Slippery When Wet",
                    "artist": "Bon Jovi",
                    "tracks": [
                        "Let It Rock",
                        "You Give Love a Bad Name"
                    ]
                },
                
                "5439": {
                    "album": "ABBA Gold"
                }
            }
    

// function for modifying JSON data using aurguments
function modify(id,propt,value) 
{

    if(propt!="track" && value!="")
        {
            Album[id][propt]=value;
            console.log(Album[id][propt]);
        }

    else if(propt == "tracks" && value != "")
        {
            if (!JSON.stringify(Album[id]).contains(prop)) 
                {
                    Album[id][propt] = [];
                    Album[id][propt].push(value);
                    console.log(Album[id].propt);
                }
            else
                {
                    Album[id][propt].push(value);
                    onsole.log(Album[id][propt])
                }
        }
    
    else if (value == "")
        {                                                         
            console.log(JSON.stringify(Album[id]));
            delete Album[id][propt];
            console.log(JSON.stringify(Album[id]));
            console.log("Property deleted");
        }
        
}

// Passing Aurguments to modify function
modify(1245,"album","abc");
modify(5439,"tracks","abc pqr");
modify(5439,"tracks","abc xyz");
modify(2548,"tracks","");

