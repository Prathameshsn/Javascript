/** 
 * Title: Write a javascript to display random articles one by one on the screen 
 *        with a digital clock . The digital clock will have full date and time parts 
 *        with running second. The article should be stored as JSON with author,date 
 *        published and publication.
 *  Day:
 *  Created By: Prathamesh Naik.
 *  Purpose: Javascript Programing Practice.
 */    
        
        var Art = '{"Articles":[' +
                '{"name":"Articles Name: Education","author":"Author Name: Abc","publication":"Publication is: Nirali"},'+
                '{"name":"Articles Name: Politics","author":"Author Name: Pqr","publication":"Publication is: TechMax"},'+
                '{"name":"Articles Name: Entertaintment","author":"Author Name: Xyz","publication":"Publication is: Sundaram"}]}';

        obj = JSON.parse(Art);

       

        function print()
            {   
                 var i;
                 var r=0;

                 i=Math.round(Math.random() *3);
                  
                 document.getElementById("demo").innerHTML =
                 obj.Articles[i].name +" <br> "+ obj.Articles[i].author+" <br> "+ obj.Articles[i].publication;

                 document.getElementById("demo1").innerHTML=Date();
                     
            }
            