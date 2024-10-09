type strNumBol = string| number | boolean

function processInput (input: strNumBol):strNumBol {
    if (typeof input === 'number') {
        return input * input;
    } else if (typeof input === 'string') {
        return input.toUpperCase();
    } else {
        return !input;
    }
}

console.log(processInput(5));
