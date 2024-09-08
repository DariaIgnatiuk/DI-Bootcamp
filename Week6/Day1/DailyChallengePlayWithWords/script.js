// 1st Daily Challenge

// function makeAllCaps(arr){
//     return new Promise((res, rej) =>{
//         newArray = []
//         let i =0;
//         for (i; i < arr.length; i++){
//             if (typeof(arr[i]) === 'string'){
//                 newArray.push(arr[i].toUpperCase())
//             }
//             else {break}
//         }
//         if (i === arr.length){res(newArray)}
//         else {rej('Not all the items of the array are strings')}
//     })
// }

// function sortWords(arr){
//     return new Promise((res,rej) => {
//         if (arr.length >= 4) {res(arr.sort())}
//         else {rej('The array has less than 4 elemens')}
//     })
// }

// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))


// 2nd Daily Challenge

let word = ''

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs(jsonString){
    return new Promise((res, rej) => {
        let object = JSON.parse(jsonString)
        if (Object.keys(object).length === 0) {rej('Error: object is empty')}
        else {res(object)}
    })
}

function toMorse(morseJS){
    return new Promise((res,rej)=>{
        word = prompt('Enter your word:')
        word = word.toLowerCase();
        result = [];
        for (let i=0; i<word.length; i++){
            if (morseJS.hasOwnProperty(word[i])){
                result.push(morseJS[word[i]]);
            }
            else{
                rej(`There is no symbol ${word[i]} in morse`)
            }
        }
        res(result)
    })
}

function joinWords(morseTranslation){
    let body = document.getElementsByTagName('body')[0];
    string = `<div>"${word}" gives you</div>`
    for (const letter of morseTranslation){
        string += `<div>${letter}</div>`
    }
    body.innerHTML = string;
}

toJs(morse)
.then(object => toMorse(object))
.then(morseCode => joinWords(morseCode))
.catch((err) => alert(err))
.catch((err) => alert(err));



