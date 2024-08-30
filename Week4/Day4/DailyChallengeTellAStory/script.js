let noun = document.getElementById('noun');
let adjective = document.getElementById('adjective');
let SBName = document.getElementById('person');
let verb = document.getElementById('verb');
let place = document.getElementById('place');
let buttonLibIt = document.getElementById('lib-button');
let story = document.getElementById('story');
let numbers = [1, 2, 3];

//checking if the input field is empty
function checkIfEmpty(word){
    if (word !== ''){
        return true;
    }
    else {
        return false;
    }
}


function makeStory(index){
    if (index == 0){
        story.innerText = `A ${adjective.value} ${noun.value} named ${SBName.value} is ${verb.value}ing in the ${place.value}.`;
    }
    else if (index == 1){
        story.innerText = `In a ${adjective.value} ${place.value} there was ${SBName.value} ${verb.value}ing the ${noun.value}.`;
    }
    else if (index == 2){
        story.innerText = `${SBName.value} is a ${adjective.value} ${noun.value} who likes to ${verb.value} in a ${place.value}`;
    }
    else {
        story.innerText = `In a dark dark ${place.value} there was a ${adjective.value} ${adjective.value} ${noun.value} named  ${SBName.value} who was ${verb.value}ing`;
    }
}

function shuffle(e){
    if (numbers.length !== 0) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        let randomNumber = numbers[randomIndex];
        makeStory(numbers[randomIndex]);
        numbers.splice(randomIndex, 1);       
    }
    else {
        alert('You are out of shuffles!')
    }
}

buttonLibIt.addEventListener('click', generageStory);
function generageStory(e){
    event.preventDefault();
    if (checkIfEmpty(noun.value) && checkIfEmpty(adjective.value) && checkIfEmpty(SBName.value)&& 
    checkIfEmpty(verb.value) && checkIfEmpty(place.value)){
        makeStory(0);
        //creating a shuffle button
        let buttonShuffle = document.createElement('button');
        buttonShuffle.innerText = "Shuffle";
        buttonShuffle.style.display = 'block';
        document.querySelector('p').append(buttonShuffle);
        buttonShuffle.addEventListener('click', shuffle);
    }
    else{
        alert("All the words must be filled in!")
    }

}