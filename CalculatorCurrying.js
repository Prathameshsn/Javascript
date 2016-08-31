/** Title: Make Calculator using Curring Method.
 *  Day:
 *  Created By: Prathamesh Naik.
 *  Purpose: Javascript Programing Practice.
 */

 var num8,num9,num3;

            function add(num1,num2)
                {
                    // num1=document.getElementById("ab").value
                    // num2=document.getElementById("cd").value
                    num3=parseInt(num1)+parseInt(num2);    
                }

                num8=document.getElementById("ab").value
                num9=document.getElementById("cd").value

                var add1=add(num8); 
                    
            function sub()
                {
                    var num1=document.getElementById("ab").value
                    var num2=document.getElementById("cd").value
                    num3=num1-num2;
                }

            function Div()
                {
                    var num1=document.getElementById("ab").value
                    var num2=document.getElementById("cd").value
                    num3=num1/num2;
                }


            function Mul()
                {
                    var num1=document.getElementById("ab").value
                    var num2=document.getElementById("cd").value
                    num3=num1*num2;
                }


            function Calculate()
                {
                    document.getElementById("res").value=num3;
                }