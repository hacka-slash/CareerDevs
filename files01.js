var filesys = require('fs');

filesys.readFile('text01.txt', 'utf8', function(err, data) {
    if(err) throw err;
    var myArr;
    myArr = data.split(',');
    console.log(myArr[2]);


    //console.log(num.);


});


