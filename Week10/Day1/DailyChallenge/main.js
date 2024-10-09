function processInput(input) {
    if (typeof input === 'number') {
        return input * input;
    }
    else if (typeof input === 'string') {
        return input.toUpperCase();
    }
    else {
        return !input;
    }
}
console.log(processInput(6));
