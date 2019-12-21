var filesys = require('fs');

//LOAD DEPARTMENT NAMES

filesys.readFile('load_dept_names.txt', 'utf8', function(err, data) {
    if(err) throw err;

    var myArr = [];
    var finalArr = [];
    var newData;
    
    newData = data.replace("INSERT INTO `departments` VALUES", '');
    newData = newData.replace(/\(\'/g, '');
    newData = newData.replace(/\)\,/g, '');
    newData = newData.replace(/\'/g, '');
    newData = newData.replace(/\)/g, '');
    newData = newData.replace(/\;/g, '');
    newData = newData.replace(/(\r\n | \n |\r)/g, '');

    myArr = newData.split('\n');
    for(var i = 0; i < myArr.length; i++){
        if(myArr[i] != '' && myArr[i] != ' '){
            finalArr.push(myArr[i]);
        }
    }

    
    console.log(newData);
    console.log(finalArr);


});


//LOAD DEPARTMENT EMPLOYEES
/*
filesys.readFile('load_dept_emp.txt', 'utf8', function(err, data) {
    if(err) throw err;
    var myArr;
    var newData;
    var finalArr = [];

    newData = data.replace("INSERT INTO `dept_emp` VALUES ", '');
    newData = newData.replace(/\(\'/g, '');
    newData = newData.replace(/\)\,/g, '');
    newData = newData.replace(/\'/g, '');
    newData = newData.replace(/\(/g, '');
    newData = newData.replace(/(\r\n | \n |\r)/g, '');

    myArr = newData.split('\n');
    for(var i = 0; i < myArr.length; i++){
        if(myArr[i] != '' && myArr[i] != ' '){
            finalArr.push(myArr[i]);
        }
    }
    
    console.log(finalArr);

});
*/

//LOAD DEPARTMENT EMPLOYEES

filesys.readFile('load_text_employees.txt', 'utf8', function(err, data) {
    if(err) throw err;
    var myArr;
    var newData;

    newData = data.replace("INSERT INTO `dept_emp` VALUES ", '');
    newData = newData.replace(/\(\'/g, '');
    newData = newData.replace(/\)\,/g, '');
    newData = newData.replace(/\'/g, '');
    newData = newData.replace(/\(/g, '');
    newData = newData.replace(/(\r\n | \n |\r)/g, '');

    myArr = newData.split('\n');
    
    console.log(myArr);

});

//LOAD DEPARTMENT SALARIES
/*
filesys.readFile('load_salaries.txt', 'utf8', function(err, data) {
    if(err) throw err;
    var myArr;
    var newData;

    newData = data.replace("INSERT INTO `salaries` VALUES ", '');
    newData = newData.replace(/\(\'/g, '');
    newData = newData.replace(/\)\,/g, '');
    newData = newData.replace(/\'/g, '');
    newData = newData.replace(/\(/g, '');
    
    newData = newData.replace(/(\r\n | \n |\r)/g, '');

    myArr = newData.split('\n');

    console.log(myArr);

});
*/


