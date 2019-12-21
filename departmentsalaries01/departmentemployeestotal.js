var filesys = require("fs");

var departmentNames;
var departmentEmployee3d;


function deptNamesSync(){
    var fileData = filesys.readFileSync("load_dept_names.txt");
    fileData = fileData.toString();
    //console.log(fileData.toString());
     fileData = fileData.replace(/\(|\'|\)/g, "");
    departmentNames = fileData.replace(/\(|\'|\)/g, "");
    departmentNames = departmentNames.split("\n");
    for (var i = 0; i < departmentNames.length; i++) {
      departmentNames[i] = departmentNames[i].substring(0, departmentNames[i].length - 1);
      departmentNames[i] = departmentNames[i].split(",");
    }
    departmentNames.shift();
    //console.log(departmentNames);

}



function deptEmpSync(){
    var fileData = filesys.readFileSync("load_dept_emp.txt");
    fileData = fileData.toString();
    var fileData = fileData.replace("INSERT INTO `dept_emp` VALUES ", "");
    fileData = fileData.replace(/\(|\'|\)/g, "");
    var tempDepartmentEmployee = fileData.split("\n");
        // console.log(tempDepartmentEmployee);
        for (i = 0; i < tempDepartmentEmployee.length; i++) {
            tempDepartmentEmployee[i] = tempDepartmentEmployee[i].substring(0, tempDepartmentEmployee[i].length - 1).split(",");
          if (tempDepartmentEmployee[i] == "") {  
            
              tempDepartmentEmployee.splice(i, 1);
              i--;
          }
        }


        departmentEmployee3d = [];
        //console.log(departmentNames);

        for(var i = 0; i < departmentNames.length; i++){
          departmentEmployee3d.push([]);
        }

        for(var i = 0; i < tempDepartmentEmployee.length; i++){
          var correctIndex = tempDepartmentEmployee[i][1].substr(1);
          correctIndex--;
          departmentEmployee3d[correctIndex].push(tempDepartmentEmployee[i]);
        }

        //console.log(departmentEmployee3d);
      
}

function displayTotalEmployeesPerDepartment(){
  
  for(var i = 0; i < departmentNames.length; i++){
    console.log(departmentNames[i][0] +',', departmentNames[i][1], '-', "Total employees:", departmentEmployee3d[i].length);
  }

}



deptNamesSync();
deptEmpSync();
displayTotalEmployeesPerDepartment();
