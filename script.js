function generateRandomNumber() { 
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("randomNumber").innerHTML = randomNumber;
}

/* add two numbers */
const num1 = 5;
const num2 = 10;

//add two numbers
const sum = num1 + num2;

//display the sum
console.log(sum);