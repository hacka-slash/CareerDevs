var classmates = [
    
{name: "Placido", score: 0},
{name: "Steve", score: 0},
{name: "Justin", score: 0}, 
{name: "Jalia", score: 0},
{name: "John", score: 0},
{name: "Gabirel", score: 0},
{name: "Kristen", score: 0},
{name: "Steve2", score: 0},
{name: "Darius", score: 0},
{name: "Kelly", score: 0} 

];

var numbers = [-1, -2, -3, -5, -7, 5, 7, 9, 10, 12];

var ran;// = Math.floor(Math.random() * numbers.length);
var randomNum;// = numbers[ran];
var myScore = 0;
var isGameOver = false;
var randomClassmate = {};
var winnerClassmate = {};


//console.log(classmates[0].name, classmates[0].score);


while(!isGameOver){
    for(var i = 0; i < classmates.length; i++){
        if(classmates[i].score >= 50){
            isGameOver = true;
            winnerClassmate = classmates[i];
        }
    }
    ran = Math.floor(Math.random() * numbers.length);
    randomNum = numbers[ran];

    ran = Math.floor(Math.random() * classmates.length);
    randomClassmate = classmates[ran];

    randomClassmate.score += randomNum;


}

console.log("The winner is", winnerClassmate.name, "score", winnerClassmate.score);

for(var i = 0; i < classmates.length; i++){
    console.log(classmates[i].name, classmates[i].score);
}





    //console.log("My score is", myScore);

//