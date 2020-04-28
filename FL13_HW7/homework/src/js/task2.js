let startGame = confirm('Do you want to play a game?');
let max=5;
let ballNumber = Math.floor(0 + Math.random() * (max + 1 - 0));
console.log(ballNumber);
if(startGame===true) {
    let attempts = 3;
    let totalPrize = 0;
    let prize = 100;
    let continueGame;
    while (attempts > 0) {
        let userChoice1 = prompt(`Choose a roulette number from 0 to 5
Attempts left: ${attempts}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${prize}$`);
        let userChoice = parseInt(userChoice1);
        if (attempts === 3) {
            if (userChoice === ballNumber) {
                totalPrize += prize;
                prize = 100;
                continueGame=confirm(`Congratulation, you won! Your prize is ${totalPrize}$. Do you want to continue?`);
                if (continueGame === true && attempts > 1) {
                    prize*=2;
                    max = 10;
                    ballNumber = ballNumber = Math.floor(0 + Math.random() * (max + 1 - 0));
                    attempts--;
                    continue;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                    break;
                }
            } else {
                prize -= 50;
                attempts--;
            }
        } else if (attempts === 2) {
            if (userChoice === ballNumber) {
                totalPrize += prize;
                prize = 50;
                continueGame=confirm(`Congratulation, you won! Your prize is ${totalPrize}$. Do you want to continue?`);
                if (continueGame === true && attempts > 1) {
                    prize*=2;
                    max = 10;
                    ballNumber = ballNumber = Math.floor(0 + Math.random() * (max + 1 - 0));
                    attempts--;
                    continue;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                    break;
                }
            } else {
                prize -= 25;
                attempts--;
            }
        } else if (attempts === 1) {
            if (userChoice === ballNumber) {
                totalPrize += prize;
                prize = 25;
                continueGame=confirm(`Congratulation, you won! Your prize is ${totalPrize}$.`);
                if(continueGame===true&&attempts>1){
                    prize*=2;
                    max=10;
                    ballNumber = ballNumber = Math.floor(0 + Math.random() * (max + 1 - 0));
                    attempts--;
                    continue;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                }
                } else{
                 alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                }
                attempts--;
            }
        }
}else{
    alert('You did not become a billionaire, but can.');
}