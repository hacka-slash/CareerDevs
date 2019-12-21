//CREATE ARRAY CALLED AVAILABLE S....
//5  NUMBERS, S 101-105
//import readline from 'readline';

var availableCars = ["101", "102", "103", "104", "105"];
var rentedCars = [];
var input;
var flag = true;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("These are the available cars:", availableCars);
console.log("-Please type the index number of the car you would like to rent");
rl.question("-Please type 'Q' to exit the program", (answer) => {
    // TODO: Log the answer in a database
    this.input = answer;
  
    rl.close();
  });

  console.log(input);
//import io from 'console-read-write';

//rentCar(0);
//rentCar(3);

//console.log(rentedCars);


console.log();
//var x = readline();
//io.write(io.read());

 function rentCar(index){
    rentedCars = rentedCars.concat(availableCars.splice(index,1));
 }

