var departments = ["Human Resources", "Finance", "Engineering"];
var departmentEmployees = [ 
    ["Kim", "Bob", "Sue"], ["Jack", "Jill", "Randy", "Hilda"], ["Live", "Longo", "Prosper"]];

var departmentSalaries = [ [40000, 50000, 60000], [60000, 80000, 100000], [60000, 70000, 90000] ];

//print each person in every department - programreport01.js
//print just the department names - departmentreport02.js
//print the department names and the total combined salaries of all dept employees departmentreport03.js

for(var i = 0; i < departmentEmployees.length; i++){
    for(var j = 0; j < departmentEmployees[i].length; j++){
        console.log(departmentEmployees[i][j]);
    }
}