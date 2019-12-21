var filesys = require("fs");
//file system method call back funciton

var departmentNames;
var departmentEmployee3d;
var employeeSalariesArr;

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

        //console.log(tempDepartmentEmployee);
        // console.groupEnd("DeptEMP");

        departmentEmployee3d = [];
        //console.log(departmentNames);

        for(var i = 0; i < departmentNames.length; i++){
          departmentEmployee3d.push([]);
        }

        for(var i = 0; i < tempDepartmentEmployee.length; i++){
          //var correctIndex = tempDepartmentEmployee[i][1];
          var correctIndex = tempDepartmentEmployee[i][1].substr(1);
          correctIndex--;
          //console.log(correctIndex);
          departmentEmployee3d[correctIndex].push(tempDepartmentEmployee[i]);
        }

        //console.log(departmentEmployee3d);
      
}

function deptEmpSalariesSync(){
  var fileData = filesys.readFileSync("load_salaries.txt");
  fileData = fileData.toString();
  //console.log(fileData.toString());
   fileData = fileData.replace(/\(|\'|\)/g, "");
  employeeSalariesArr = fileData.replace(/\(|\'|\)/g, "");
  employeeSalariesArr = employeeSalariesArr.split("\n");
  for (var i = 0; i < employeeSalariesArr.length; i++) {
    employeeSalariesArr[i] = employeeSalariesArr[i].substring(0, employeeSalariesArr[i].length - 1);
    employeeSalariesArr[i] = employeeSalariesArr[i].split(",");
  }
  employeeSalariesArr.shift();
  console.log(employeeSalariesArr);

  var departmentSalariesArr = [];
  for(var i = 0; i < departmentNames.length; i++){
    departmentSalariesArr[i] = 0;
  }
  for(var i = 0; i < departmentNames.length; i++){
    for(var j = 0; j < departmentEmployee3d[i].length; j++){
      //ITTERATE THOUGH LIST OF SALRIES, IF THE ID AND DATE MATCH OUR MOST CURRENT RECORDS, ADD THE SALARY TO THE DEPARTMENT'S TOTAL
      for(var x = 0; x < employeeSalariesArr.length; x++){
        if(departmentEmployee3d[i][j][0] == employeeSalariesArr[x][0]  && departmentEmployee3d[i][j][2] == employeeSalariesArr[x][2]){
          //console.log(employeeSalariesArr[x][1]);
          departmentSalariesArr[i] += Number(employeeSalariesArr[x][1]);
        }
      }
      if(j == departmentEmployee3d[i].length - 1){
        //console.log("NEXT DEPARTMENT",' ', i);
      }
    }
    //console.log(departmentEmployee3d[i][0], ' ', departmentEmployee3d[i][2]);
  }
  //console.log(departmentSalariesArr);

  for(var i = 0; i < departmentEmployee3d.length; i++){
    console.log(departmentNames[i][0], ' ', departmentNames[i][1], ' $' + Number(departmentSalariesArr[i]));
  }

  //console.log(departmentEmployee3d);

}


//deptemp();
//deptnames();
//deptemp();
//deptNamesSync();
//deptEmpSync();
deptNamesSync();
deptEmpSync();
deptEmpSalariesSync();
