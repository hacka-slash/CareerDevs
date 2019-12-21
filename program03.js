var users = ["Placido", "Jane", "Bubba"];
var prize = 100;

//Randomly select one person as the winner,
//Let them know total amount they have won
console.log(users.length);
var ran = Math.floor(Math.random() * users.length);
var winner = users[ran];
console.log(ran);

//console.log("The Winner is", winner+ "! Your prize is $"+prize);

//console.log(winner);


//Javascript Random Integer...
//Had to search how to use Math.Floor() properly