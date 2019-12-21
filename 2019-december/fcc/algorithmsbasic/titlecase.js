function titleCase(str){
    let newString = '';
    let words = str.split(" ");

    let upperCaseFirstLetter;
    let remainingLetters;

    for(let i = 0; i < words.length; i++){
        upperCaseFirstLetter = words[i][0].toUpperCase();
        remainingLetters = words[i].substring(1);

        newString += upperCaseFirstLetter+remainingLetters+" ";
    }

    for(let i = 0; i < words.length; i++){
        let firstLetter = words[i];

        //firstLetter = 
    }
    return str;
}