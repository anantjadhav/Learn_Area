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
console.log(`The sum of ${num1} and ${num2} is ${sum}.`);

// store two numbers
const addnum1 = prompt("Enter the first number:");
const addnum2 = prompt("Enter the second number:");

//add two numbers
const addsum = parseInt(addnum1) + parseInt(addnum2);

//display the sum
console.log(`The sum of ${addnum1} and ${addnum2} is ${addsum}.`);

