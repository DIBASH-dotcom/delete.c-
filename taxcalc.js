<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tax Calculator</title>
</head>
<body>
    
    <h1> Tax Calculator</h1>

    <label>Full Name :</label>
    <input type="text" id="name" placeholder="Enter Your Name"><br><br>

    <label> Annunal Income:</label>
    <input type="number" id="income" placeholder="Enter Your Annuanl Income"><br><br>

    <label> Age:</label>
    <input type="number" id="age" placeholder="Enter Your Age"><br><br>

    <button onclick="Calaculate()">Calcualte</button>

    <p id="result"></p>


    <script>
function Calaculate(){
let name = document.getElementById("name").value;
let incomevalue= document.getElementById("income").value;
let agevalue =document.getElementById("age").value;
let result =document.getElementById("result");

let missings= [];
if(name==="") {
    missings.push("Name");

}
if(incomevalue==="") {
    missings.push("Income");

}
if(agevalue==="") {
    missings.push("Age");
}
if(missings.length>0) {
    result.innerHTML ="Please enter the following fields:" +missings.join(",");
    result.style.color="red";
    return;
}

let income =parseFloat(incomevalue);
let age =parseFloat(agevalue);


if(isNaN(income) || income<=0) {
    result.innerHTML="PLease enter a vaild income amount grater than 0.";
    result.style.color="red";
    return;
}

if(isNaN(age) || age<=0 || age>=100) {
    result.innerHTML="Age must be greater than 0 and less than 100, otherwise error";
    result.style.color="red";
    return;
}

let incomemoney;
if(income <= 200000) incomemoney = 0;
    else if(income > 200000 && income <= 500000) incomemoney = income*0.10;
    else incomemoney = income*0.20;

let finaltax;
if(age>=60) 
finaltax = incomemoney -(incomemoney*0.30);
else 
finaltax = incomemoney;

result.innerHTML =`
 Hello ${name},<br>
 Your aNNUNAL iNCOME IS :${income.toFixed(2)}<br>
    Your AGE IS :${age}<br>
    Base Tax :${incomemoney.toFixed(2)}<br>
    Final Tax after age discount :${finaltax.toFixed(2)}<br>
    
    `
     result.style.color = (finaltax > 50000) ? "red" : (finaltax === 5000 ? "blue" : "green");

}
    </script>
</body>
</html>
