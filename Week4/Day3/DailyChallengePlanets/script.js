const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const moons = [0, 0, 1, 2, 92, 83, 28, 14]
let sectionPlanets = document.getElementsByClassName("listPlanets")[0]
for (planet in planets) {
    let element = document.createElement("div");
    sectionPlanets.append(element);
}
let divPlanets = sectionPlanets.children;
for (let i = 0; i< planets.length; i++){
    divPlanets[i].setAttribute("class", 'planet');
}
for (let i = 0; i< planets.length; i++){
    divPlanets[i].classList.add(planets[i])
}

const colors = ['brown', 'yellow', 'blue', 'red', 'white', 'pink', 'green', 'purple']
for (let i = 0; i< planets.length; i++){
    document.getElementsByClassName("planet")[i].style.background = colors[i];
}


let moon = document.createElement('div');
moon.setAttribute('class', 'moon');
let earth = document.getElementsByClassName("Earth")[0];
earth.append(moon);

for (let i = 0; i< planets.length; i++){
    for (let j = 0; j < moons[i]; j ++){
        let moon = document.createElement('div');
        moon.setAttribute('class', 'moon');
        let planet = document.getElementsByClassName("planet")[i];
        planet.append(moon);

    }
}