var filesys = require("fs");
// 1. load_dept_names.txt

var departmentNames = "";
function departmentNamesFunc() {
  departmentNames = filesys.readFileSync("load_dept_names.txt", "utf8");
  // filesys.readFile("load_dept_names.txt", "utf8", function(err, data) {
  // if (err) throw err;
  departmentNames = departmentNames.replace(/\(|\'|\)/g, "");
  departmentNames = departmentNames.split("\n");

  for (var i = 0; i < departmentNames.length; i++) {
    departmentNames[i] = departmentNames[i].substring(
      0,
      departmentNames[i].length - 1
    );
    departmentNames[i] = departmentNames[i].split(",");
  }
  departmentNames.shift();
  //console.log(departmentNames);
}

var deptEmp = "";
function departmentEmployeesMethod() {
  var departmentEmployees = '';
  departmentEmployees = filesys.readFileSync("load_dept_emp.txt", "utf8");
  // filesys.readFile("load_dept_names.txt", "utf8", function(err, data) {
  // if (err) throw err;
  departmentEmployees = departmentEmployees.replace(/\(|\'|\)/g, "");
  departmentEmployees = departmentEmployees.replace('INSERT INTO `dept_emp` VALUES ', "");
  departmentEmployees = departmentEmployees.split("\n");

  for (var i = 0; i < departmentEmployees.length; i++) {
    departmentEmployees[i] = departmentEmployees[i].substring(
      0,
      departmentEmployees[i].length - 1
    );
    departmentEmployees[i] = departmentEmployees[i].split(",");
  }
  //departmentEmployees.shift();

  //console.log(departmentEmployees);
  var employeesNew = [];
  for(var i = 0; i < departmentEmployees.length; i++){
    if(departmentEmployees[i] != ''){
      employeesNew.push(departmentEmployees[i]);
    }
  }

  var emp3d = [];
  for(var i = 0; i < departmentNames.length; i++){
    emp3d[i] = [];
  }

  for(var i = 0; i < departmentNames.length; i++){
    for(var j = 0; j < employeesNew; j++){
      if(employeesNew[j][1] == departmentNames[i][0]){
        emp3d[i].push(employeesNew[j]);
      }
    }
  }

  console.log(emp3d);



 // console.log(employeesNew);
  

}

departmentNamesFunc();
departmentEmployeesMethod();

// department_totalemployees_attempt03.js