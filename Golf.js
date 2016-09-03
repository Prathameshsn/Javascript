/** Title: Golf.
    Created By: Prathamesh Naik.
    Purpose: Javascript Programing Practice.*/
    
function cal()
{
    var par=document.getElementById("p").value;
    var stroke=document.getElementById("s").value;
     
    var p=parseInt(par);
    var s=parseInt(stroke);
 

    p1=p+1;
    p2=p+2;
    p3=p+3;

    if(par==stroke) {
            alert("Par");
    }

    else if (stroke==1) {
            alert("Hole-in-one!")    
    }

    else if(stroke==par-1) {
            alert("Birdie");
            console.log(p+1);
    }

    else if(s=p1) {
            console.log(p2);
            alert("Bogey");
    }
            
    else if(s=p2) {
            alert("Double Birdie");
    }

    else if(s>=p) {
            alert("Go Home!");
    }       
}

