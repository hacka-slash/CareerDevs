var myScore = 0;
var numbers = [-1, -2, -3, -5, -7, 5, 7, 9, 10, 12];

var ran;// = Math.floor(Math.random() * numbers.length);
var randomNum;// = numbers[ran];


while(myScore < 50){
    ran = Math.floor(Math.random() * numbers.length);
    randomNum = numbers[ran];
        myScore += randomNum;
        console.log(myScore);
}


console.log("My score is", myScore);

//