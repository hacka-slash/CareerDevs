var readLine = require('readline');

var availableCars = ["Honda Civic","Nissan Maxima", "Chevy Camaro", "Ford Mustang", "Mercedes S Class"];
var rentedCars = [];
var carRentalPrice = [30, 40, 90, 90, 110];
//var rentalNumberDays = 0;

console.log("Welcome to JasvaScript Car Rentals");
console.log(" ");
console.log("Available Cars");

for (var i = 0; i < availableCars.length; i++){
    console.log("  ", i+1+".", availableCars[i]);
}

var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Select A Car and Length of Days: ", function(answer){
    var answers = answer.trim().split(",")
    var index = Number(answers[0] -1);
    var days = Number(answers[1]);
    var tax = (carRentalPrice[index] * 0.07) * days;
    
    console.log("You selected A Car", availableCars[index]);
    console.log("This car rents for", carRentalPrice[index], "dollars per day");
    console.log("You are renting for", days, "number of days")
    //Included 'toLocaleString' for formatting:
    console.log("Your total tax = ",tax.toLocaleString('en') , "dollars");
    //Included 'toLocaleString' for formatting:
    console.log("The total cost is $"+ ((carRentalPrice[index] + tax) * days).toLocaleString('en'));
    rl.close();
});

function rentCar(carChoice, numOfDaysRented){


}