function reverseString(str) {
  //return str;
  var backwards = [];
  var stringReversed = '';
  for(var i = str.length-1; i >= 0; i--){
    stringReversed += str[i];
  }
  //return backwards;
  console.log(stringReversed);
}

reverseString("hello");
