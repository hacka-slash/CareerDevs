function mutation(arr){
    let word2 = arr[1].split('');
    let isTrue = true;

    for(let i = 0; i < word2.length; i++){
        if(arr[0].includes(word2[i])){
            //console.log(word2[i]);
        }else{
            isTrue = false;
        }
    }
    if(isTrue)
        return true;
    else    
        return false;

    //return arr;
}

console.log(mutation(["Arline", "lne"]));