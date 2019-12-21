
var fileFoo = require('fs');
const DEPTNUM = 9;

var finalDeptNamesArr = [];


//1. load_dept_names.txt
fileFoo.readFile('load_dept_names.txt', 'utf8', function(err, fileData){
    if(err) throw(err);

    var departmentNamesString = fileData.replace(/\(|\'|\),|\);/g, '');
    var roughDepartmentNamesArray = departmentNamesString.split('\n');
    roughDepartmentNamesArray.shift();

    finalDeptNamesArr = [];

    for(var i = 0; i < roughDepartmentNamesArray.length; i++){
        finalDeptNamesArr.push(roughDepartmentNamesArray[i].split(','));
    }
    //console.log(finalDeptNamesArr);

});



//2. LOAD DEPT EMP
fileFoo.readFile('load_dept_emp.txt', 'utf8', function(err, fileData){
    if(err) throw(err);

    var departmentEmployeesString = fileData.replace(/\(|\'|\),|\)|\)\,;/g, '');
    departmentEmployeesString = departmentEmployeesString.replace("INSERT INTO `dept_emp` VALUES ", "");
    var roughDepartmentEmployeesArray = departmentEmployeesString.split('\n');

    var deptNamesArr = [];

    for(var i = 0; i < roughDepartmentEmployeesArray.length; i++){
        roughDepartmentEmployeesArray[i].split(',');
        if(roughDepartmentEmployeesArray[i] == ""){
            roughDepartmentEmployeesArray.splice(i, 1);
            i--;
        }
    }
    var departmentEmployees2DArray = [];
    for(var i = 0; i < roughDepartmentEmployeesArray.length; i++){
       departmentEmployees2DArray.push(roughDepartmentEmployeesArray[i].split(','));
    }
    //console.log(departmentEmployees2DArray);

    var finalArray = [];
    for(var i = 0; i < finalDeptNamesArr.length; i++){
        //finalArray.push([]);
        finalArray[i] = [];
    }

    var correctIndex;
    for(var i = 0; i < departmentEmployees2DArray.length; i++){

        correctIndex = departmentEmployees2DArray[i][1].substr(1);
        correctIndex = Number(correctIndex);
        correctIndex--;
        //console.log(correctIndex);
        finalArray[correctIndex].push(departmentEmployees2DArray[i]);
                

    }

    console.log(finalArray);

    for(var i = 0; i < finalDeptNamesArr.length; i++){
        console.log(finalDeptNamesArr[i][0], ' ', finalDeptNamesArr[i][1], ' ', finalArray[i].length);
    }
    

    
});


/*
One big array that hi=olds an elemnt for each depatment number,
which holds an array for each employee within that department

*/


