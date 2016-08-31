/** Title: Calculator.
 *  Day:
 *  Created By: Prathamesh Naik.
 *  Purpose: Javascript Programing Practice.
 */
            var num3;

            function add()
                {
                    var num1=document.getElementById("ab").value
                    var num2=document.getElementById("cd").value
                    num3=parseInt(num1)+parseInt(num2);    
                }

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