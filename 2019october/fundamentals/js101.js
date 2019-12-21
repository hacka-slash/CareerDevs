//wokring with functions
//function: A subset of REUSABLE code that performs a specific task
//Functions help to write DRY code (DON'T REPEAT YOURSELF)

console.log(5 * 10);
console.log(20*40);

multi(9, 19);
multi(29, 3);

function multi(f1, f2){
    console.log("We are multiplying", f1, "and", f2);
    console.log(f1 * f2);
}

function checkout(){
    console.log("Thank you for visiting the JavaScript Hotel! We await your return");

}

function checkin(){
    console.log("Welcome to the JavaScript Hotel. A terrible nights sleep but lots of coding!");
}

