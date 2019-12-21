// var names = ["Arnell", "Steve", "Jaliyah"];      //an array
// var student = {
// 	firstName: "Arnell",
// 	lastName: "MilCasa",
// 	Cohort: 9,
// 	startDate: new Date(19, 08, 09)

// };

// var students = [
//     {
//         firstName: "Arnell",
//         lastName: "MilCasa",
//         Cohort: 9,
//         startDate: new Date(19, 08, 09)
    
//     },
//     {
//         firstName: "Steve",
//         lastName: "Kovolski",
//         Cohort: 9,
//         startDate: new Date(19, 08, 09)
    
//     }    
// ];

// // console.log(student.firstName);
// // console.log(students[1].firstName);

// for(var i = 0; i < students.length; i++){
//     console.log(students[i].firstName);
// }

function sumAll(arr) {
    //arr.sort();
    var total = arr[0];
    var startNumber = arr[0];
    var finishNumber = arr[1];
    var timesItterated = startNumber;
    
    
    // while(timesItterated <= finishNumber){
    //   total += total + 1;
    //   timesItterated++;
    // }

    for(var i = startNumber + 1; i <= finishNumber; i++){
        total += i;
    }
  
    console.log(total);
    return total;
  }
  
  sumAll([4, 20]);
  

