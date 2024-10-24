const imageDiv = document.getElementById('image');
const buttonPrev = document.getElementById('previous');
const buttonNext = document.getElementById('next');
const buttonNew = document.getElementById('new');
const infoDiv = document.getElementById('info');

let index = 1;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

buttonNext.addEventListener('click', () =>{
    index++;
    if(index > 1025) index = 1;
    fetchPockemon();
})

buttonPrev.addEventListener('click', () =>{
    index--;
    if(index < 1) index = 1025;
    fetchPockemon();
})

buttonNew.addEventListener('click', () =>{

    const newIndex = getNewPockemon();
    console.log(newIndex);
    
    index = newIndex;
    fetchPockemon();
});

const getNewPockemon = () =>{
    found = false;
    let result = 0;
    do {
        result = Math.floor(Math.random() * 1024) + 1;
        if (result % 3 === 1) found = true;
    }
    while (!found);
    return result;
}

const fetchPockemon = async () => {
    infoDiv.innerHTML = '<div>Loading...</div>';
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    const data = await res.json();
    const html = `
    <h3>${capitalize(data.forms[0].name)}</h3>
    <p>Pockemon n° ${index}</p>
    <p>Height: ${data.height}</p>
    <p>Weight: ${data.weight}</p>
    <p>Type: ${capitalize(data.types[0].type.name)}</p>`
    infoDiv.innerHTML = html;
    imageDiv.innerHTML = `<img src="${data.sprites.front_default}" alt="${capitalize(data.forms[0].name)}"/>`;

}

fetchPockemon();