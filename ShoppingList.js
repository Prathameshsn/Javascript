      
var MyList = [ ["watch",2],["sop",4],["laptop",6],["phones",25],["shirts",15] ];
//  document.getElementById("demo").innerHTML = MyList;

         for(var i=0;i<5;i++)
            {
                for(j=0;j<2;j++)
                {
                    document.write(MyList[i][j]+" ");
                }
                document.write("<br>");
            }
            console.log(MyList);


        function shift()
            {
                MyList.shift();
                 console.log(MyList);

                // document.getElementById("demo").innerHTML=MyList;
            }

        function push()
            {
                var n1=prompt("Enter Item")
                var n2=prompt("Enter Quantity")
                MyList.push([n1,n2]);
                 console.log(MyList);

                // document.getElementById("demo").innerHTML=MyList;
            }

        function pop()
            {
                MyList.pop();
                 console.log(MyList);

                // document.getElementById("demo").innerHTML=MyList;
            }

        function unshift()
            {
                var n1=prompt("Enter Item")
                var n2=prompt("Enter Quantity");
                MyList.unshift([n1,n2]);
                 console.log(MyList);

                // document.getElementById("demo").innerHTML=MyList;
            }



            function print()
            {
              for(var i=0;i<5;i++)
                {
                    for(j=0;j<2;j++)
                        {
                            document.write(MyList[i][j]+"   ");
                        }
                        document.write("<br>");
                }
  
            }



 