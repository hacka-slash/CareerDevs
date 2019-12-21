function confirmEnding(str, target){
    //console.log(str[str.length -1]);
    if(str[str.length-1] == target){
        return true;
    }
    else{
        return false;
    }
    
    return str;
}

console.log(confirmEnding("Bastian", "n"));



function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let numberOfChars;
    let arrChars;
  
    arrChars = target.split('');
    str = str.substring(str.length - target.length);
    //return str;
    //cosole.log(str);
    if(str == target){
      return true;
    }else{
      return false;
    }
  }
  
  confirmEnding("Bastian", "n");