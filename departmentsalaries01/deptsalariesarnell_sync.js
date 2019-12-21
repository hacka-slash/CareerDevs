var filesys = require("fs");
//file system method call back funciton

var departmentNames;

/*
function deptnames() {
  // 1.
  filesys.readFile("load_dept_names.txt", "utf8", function(err, data) {
    if (err) throw err;
    departmentNames = data.replace(/\(|\'|\)/g, "");
    departmentNames = departmentNames.split("\n");
    for (var i = 0; i < departmentNames.length; i++) {
      departmentNames[i] = departmentNames[i].substring(0, departmentNames[i].length - 1);
      departmentNames[i] = departmentNames[i].split(",");
    }
    departmentNames.shift();
    console.log(departmentNames);
  });
}
// 2.
function deptemp() {
  filesys.readFile("load_dept_emp.txt", "utf8", function(err, data) {
    if (err) throw err;
    var dtEmpData = data.replace("INSERT INTO `dept_emp` VALUES ", "");
    var dtEmpData = dtEmpData.replace(/\(|\'|\)/g, "");
    var tempDepartmentEmployee = dtEmpData.split("\n");
    // console.log(tempDepartmentEmployee);
    for (i = 0; i < tempDepartmentEmployee.length; i++) {
        tempDepartmentEmployee[i] = tempDepartmentEmployee[i].substring(0, tempDepartmentEmployee[i].length - 1).split(",");
      if (tempDepartmentEmployee[i] == "") {  
        
          tempDepartmentEmployee.splice(i, 1);
          i--;
      }
    }
    for (var i = 0; i < tempDepartmentEmployee.length; i++) {
        //console.log("temp:", tempDepartmentEmployee[i][1]);
    }
    console.log(tempDepartmentEmployee);
    // console.groupEnd("DeptEMP");
  });
}
*/

function deptReadSync(){
    //filesys.readFileSync()
    fileData = filesys.readFileSync("load_dept_emp.txt");
    console.log(fileData.toString());
}


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
    console.log(departmentNames);

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

        console.log(tempDepartmentEmployee);
        // console.groupEnd("DeptEMP");

        var departmentEmployee3d = [];
        //console.log(departmentNames);

        for(var i = 0; i < departmentNames.length; i++){
          departmentEmployee3d.push([]);
        }

        for(var i = 0; i < tempDepartmentEmployee.length; i++){
          for( var j = 0; j < departmentNames.length; j++){
              if(tempDepartmentEmployee[i][1] == departmentNames[j][0]){
                  departmentEmployee3d[j].push(tempDepartmentEmployee[i]);
              }
          }
        }

        console.log(departmentEmployee3d);
      
}
//deptemp();
//deptnames();
//deptemp();
//deptNamesSync();
//deptEmpSync();
deptNamesSync();
deptEmpSync();
