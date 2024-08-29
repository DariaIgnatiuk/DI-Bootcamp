let canvas = document.getElementById('canvas');
let palette = document.getElementById('palette');
let button = document.getElementById('buttonClear');
let currentColor = 'black';
let coloring = false;

const colors = [
    ['red', 'orangered', 'orange'],
    ['yellow', 'yellowgreen', 'lightgreen'],
    ['green', 'turquoise', 'cyan'],
    ['lightskyblue', 'dodgerblue', 'blue'],
    ['darkblue', 'indigo', 'darkmagenta'],
    ['violet', 'lightpink', 'lightgray'],
    ['gray', 'black', 'white']
]

for (i = 0; i < 25; i++){
    let canvasRow = document.createElement('div');
    canvasRow.setAttribute('class', 'row');
    canvas.append(canvasRow);
    for (j = 0; j < 60; j++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.addEventListener('mouseover',function(e){
            if (coloring){
            square.style.backgroundColor = currentColor;
            }
        })
        canvasRow.append(square);
    }
}

canvas.addEventListener('mousedown', function(e){
    coloring = true;
})

canvas.addEventListener('mouseup', function(e){
    coloring = false;
})

for (i = 0; i < 7; i++){
    let paletteRow = document.createElement('div');
    paletteRow.setAttribute('class', 'row');
    palette.append(paletteRow);
    for (j = 0; j < 3; j++) {
        let color = document.createElement('div');
        color.setAttribute('class', 'color');
        color.style.backgroundColor = colors[i][j];
        color.addEventListener('click', function(e){
            currentColor = color.style.backgroundColor;
        })
        paletteRow.append(color);
    }
}

button.addEventListener('click', function(e){
    let squares = document.getElementsByClassName('square');
    for (i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = 'white';
    }


})


