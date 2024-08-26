let sentance = "This dinner is bad";
let wordNot = sentance.indexOf('not');
let wordBad = sentance.indexOf('bad');
if ((wordBad > wordNot) && (wordNot != -1) && (wordBad != -1)){
    let subSentance1 =  sentance.substring(0, wordNot);
    let subSentance2 = sentance.substring(wordBad+3, sentance.length);
    let newSentance = subSentance1 + "good" + subSentance2
    console.log(newSentance);
}
else {
    console.log(sentance);
}
