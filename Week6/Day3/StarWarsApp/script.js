let box = document.getElementById('box');

const printMistake = () =>{
    html = `<div id="mistake">Oh no! That person isn't available.</div>`;
    box.innerHTML = html;
}

const printCharacter = (character) =>{
    html = `<div id="name">${character.name}</div>
    <div>Height: ${character.height}</div>
    <div>Gender: ${character.gender}</div>
    <div>Birth Year: ${character.birthYear}</div>
    <div>Home World: ${character.homeplanet}</div>`
    box.innerHTML = html;
    if (character.name==="Leia Organa"){
        document.getElementById('leia').innerHTML = `<img src="resources/Leia.jpg" height="300" />`
    }
    else {
        document.getElementById('leia').innerHTML ='';
    }
}

const showLoadingSign = () =>{
    html = `<div id="mistake">Loading...</div>
       <img src = "https://i.gifer.com/ZKZg.gif" height="120" />`
    box.innerHTML = html;
}; 

const getCharacter = async (num)=>{    
    try {
        showLoadingSign(); 
        let res = await fetch(`https://www.swapi.tech/api/people/${num}`);
        let data = await res.json();
        let homeURL = data.result.properties.homeworld;
        let character = {
            name: data.result.properties.name, 
            height:data.result.properties.height,
            gender:data.result.properties.gender,
            birthYear:data.result.properties.birth_year
        } 
        const getHomePlanet = async(homeURL)=>{
            try {
                let resHome = await fetch(homeURL);
                let dataHome = await resHome.json();
                character.homeplanet = dataHome.result.properties.name;
                printCharacter(character);
            } catch (error) {
                console.log(error);
                printMistake();
            }
        }
        getHomePlanet(homeURL);
    } 
    catch (error) {
            console.log(error);
            printMistake();
        }
}

const chooseCharacter = (e) =>{
    let num = Math.floor(Math.random() * 83) + 1;
    console.log(num);
    getCharacter(num);
}

