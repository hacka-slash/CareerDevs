var readLine = require('readline');

var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Select A Car: ", function(answer){
    console.log("You selected", answer);
    rl.close();
});