const sentanceToArray = sentance => {
    letterArray = []
    for (const letter of sentance){
        if (letter !==' '){
            letterArray.push(letter);
        }
    }
    return letterArray;
}

const anagram = (sent1, sent2) => {
    letterArray1 = sentanceToArray(sent1.toLowerCase());
    letterArray2 = sentanceToArray(sent2.toLowerCase());
    let i;
    for (i = 0; i < letterArray1.length; i++){
        if (letterArray2.includes(letterArray1[i])){
            let x = letterArray2.indexOf(letterArray1[i]);
            letterArray2[x] = "*";
        }
        else{
            break
        }
    }
    if (i == letterArray1.length){
        return true;
    }
    else{
        return false;
    }
}

console.log(anagram('School master', 'The classroom'));