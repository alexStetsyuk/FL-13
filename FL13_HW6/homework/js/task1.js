let inputNumber = prompt('Enter a number');
let inputPercentage = prompt('Enter tip percentage');
let inputNumber1 = parseInt(inputNumber);
let inputPercentage1 = parseInt(inputPercentage);
let tipAmount=inputNumber1*(inputPercentage1/100);
let totalSum=inputNumber1+tipAmount;

if(isNaN(inputNumber)===true|| isNaN(inputPercentage)===true|| inputPercentage<0||inputPercentage>100){
    alert('Invalid input data');
} else if(totalSum<0){
    alert('Invalid input data');
} else{
    alert(`Check number: ${inputNumber1}
Tip: ${inputPercentage1}%
Tip amount: ${tipAmount}
Total sum: ${totalSum}`);
}