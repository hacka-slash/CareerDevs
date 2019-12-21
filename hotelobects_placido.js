var readLine = require('readline')

// var arrRl = new Array(5);
// var counter = 0;
// for(var i = 0; i < arrRl.length; i++){
//     arrRl[i] = readLine.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
// }

var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

var hotel = {
    key: "value",
    availableRooms: [101, 102, 103, 104, 105, 106],
    bookedRooms: [],
    bookRoom: function(theRoom){
        //room = theRoom[0];
        //console.log(theRoom);
        var isFound = false;
        for(var i = 0; i < this.availableRooms.length; i++){
            if(this.availableRooms[i] == theRoom){
                this.availableRooms.splice(i, 1);
                isFound = true;
            }
        }
        if(isFound)
            this.bookedRooms.push(Number(theRoom));
        else
            console.log("Hmmm, that room is not available");

        this.availableRooms.sort();
        this.bookedRooms.sort();
        //this.bookedRooms.push(this.availableRooms.pop());
        //this.displayInfo();      
    },
    returnRoom: function(theRoom){
        var isFound = false;
        for(var i = 0; i < this.bookedRooms.length; i++){
            if(this.bookedRooms[i] == theRoom){
                this.bookedRooms.splice(i, 1);
                isFound = true;
            }
        }
        if(isFound == true)
            this.availableRooms.push(Number(theRoom));
        else
            console.log("Hmmm, that room is not currently booked")

        this.availableRooms.sort();
        this.bookedRooms.sort();
        //this.bookedRooms.push(this.availableRooms.pop());
        //this.displayInfo();
    },
    displayInfo: function(){
        this.availableRooms.sort();
        this.bookedRooms.sort(); 
        console.log("Available Rooms:", this.availableRooms);
        console.log("Booked Rooms:", this.bookedRooms);
    }
}

var isBooking = true;
var loopControl = 0;


console.log("Welcome to the hotel!");
//[lbl] start:
//do{

//start:
loopControl++;
doGame();


//}while(isBooking);


//hotel.bookRoom();
//hotel.bookRoom();
//hotel.bookRoom();
//hotel.returnRoom();
function doGame(){
    console.log("These are the available rooms", hotel.availableRooms);
    console.log("These are the rooms that are currently booked", hotel.bookedRooms);
    rl.question("Type 'b' to book a room, 'r' to return a room, or 'q' to exit: ", (choice) => {
        
        if(choice == "b"){
            if(hotel.availableRooms.length == 0){
                console.log("There are currently no available rooms");
                doGame();
            }else{
            rl.question("Type the room you would like to rent: ", (answer) => {
                //counter++;
                var answer = answer.trim();
                hotel.bookRoom(answer);
                console.log();
                console.log();
                doGame();
                
            });
        }
        }
        else if(choice == "r"){
            if(hotel.bookedRooms.length == 0){
                console.log('\n');
                // console.log();
                console.log("There are no rooms to return.");
                doGame();
            }else{
            rl.question("Type the room you would like to return: ", (answer) => {
                //counter++;
                var answer = answer.trim();
                hotel.returnRoom(answer);
                console.log();
                console.log();
                doGame();
            });
        }
        
        }
        else if(choice == "q"){
            rl.close();
        }
        else if(choice != "b" || choice != "r" || choice != "q"){
            console.log('\n');
            // console.log()
            console.log("Follow Instructions Please!");
            doGame();
        }
});
}