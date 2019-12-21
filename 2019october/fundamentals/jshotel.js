//CREATE ARRAY CALLED AVAILABLE S....
//5  NUMBERS, S 101-105

var availableRooms = ["101", "102", "103", "104", "105"];
var bookedRooms = [];
bookedRooms = bookedRooms.concat(availableRooms.splice(1,1));
bookedRooms = bookedRooms.concat(availableRooms.splice(2,1));

var top = bookedRooms.length
console.log(availableRooms.splice(1,1));
//  bookedRooms[bookedRooms.length] = availableRooms.splice(1,1);
//  bookedRooms[bookedRooms.length] = availableRooms.splice(2,1);
 console.log(bookedRooms);

//var bookedRooms = [];
// availableRooms[1] = "";
// console.log(availableRooms);

// for(var i = 1; i < nums; i++){
//     availables[i] = " 10" +i;
// }
