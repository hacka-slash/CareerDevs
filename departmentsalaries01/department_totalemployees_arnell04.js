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
//2. load_dept_emp.txt
var departmentEmployees3d = '';
function departmentEmp(){
    var empData = filesys.readFileSync("load_dept_emp.txt", "utf8");
    empData = empData.replace("INSERT INTO `dept_emp` VALUES ", '');
    empData = empData.replace(/\(|\'|\),/g, "").split("\n");

    newEmpData = [];

    for(var i = 0; i < empData.length; i++){
        if(empData[i] != '' && empData[i].includes('9999')){
            
                newEmpData.push(empData[i].split(","));
            
            
        }
    }

    var newEmp3dData = [];
    for(var i = 0; i < departmentNames.length; i++){
        newEmp3dData.push([]);
    }

    console.log(newEmpData);

}

departmentNamesFunc();
departmentEmp();