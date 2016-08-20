        
        
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
                 
                // document.write(i);
                // console.log(""+i+r);
                
              
                    document.getElementById("demo").innerHTML =
                    obj.Articles[i].name +" <br> "+ obj.Articles[i].author+" <br> "+ obj.Articles[i].publication;

                    document.getElementById("demo1").innerHTML=Date();
                     
            }
            