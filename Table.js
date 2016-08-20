var count=1;
var coun=1;

function row()
    { 
        var table = document.getElementById("tab");
        var row = table.insertRow();
    
        row.innerHTML = "Row"+count++;      
    }

function column()
    { 
    var table = document.getElementById("col");
        var col = table.insertCell();
        // var row=col.insertRow();
        col.innerHTML = "Column"+coun++;
    }