function checkScope() {
    'use strict';
    let i = 'function scope';
    //let i;
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  console.log(checkScope());

  //variable 'i' is limited to the scope it is declared. So if I declared
   //'i' twice within the same code block, 'use strict' would throw an error
   //for me. But the way that I declared 'i' witin the 'if statement' code block,
   //since it is a different block, it only exists within that block and dies at
   //the end of that 'if' statement while the one created at the top of that function
   //still exists.

