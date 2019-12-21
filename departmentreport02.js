var departments = ["Human Resources", "Finance", "Engineering"];
var departmentEmployees = [ 
    ["Kim", "Bob", "Sue"], ["Jack", "Jill", "Randy", "Hilda"], ["Live", "Longo", "Prosper"]];

var departmentSalaries = [ [40000, 50000, 60000], [60000, 80000, 100000], [60000, 70000, 90000] ];

//print each person in every department - programreport01.js
//print just the department names - departmentreport02.js
//print the department names and the total combined salaries of all dept employees departmentreport03.js

/*
PROGRAM01:
for(var i = 0; i < departmentEmployees.length; i++){
    for(var j = 0; j < departmentEmployees[i].length; j++){
        console.log(departmentEmployees[i][j]);
    }
}*/

/*
PROGRAM02
for(var i = 0; i < departments.length; i++){
    console.log(departments[i]);
}

/*PROGRAM03*/
/*
var totals = [0, 0, 0];
for(var i = 0; i < departments.length; i++){
    for(var j = 0; j < departmentSalaries[i].length; j++){
        totals[i] += departmentSalaries[i][j];
        //console.log(departmentSalaries);
    }
}
for(var i = 0; i < totals.length; i++){
    console.log(totals[i]);
}
*/

//PROGRAM02
for(var i = 0; i < departments.length; i++){
    console.log(departments[i]);
}