function factorialize(num) {
    var finalnum = 1;
    for(var i = num; i > 0; i--){
      finalnum *= i
    }
    console.log(finalnum);
    //return num;
  }
  
  factorialize(6);
  