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
  console.log(departmentNames);
}

departmentNamesFunc();

// department_totalemployees_attempt03.js