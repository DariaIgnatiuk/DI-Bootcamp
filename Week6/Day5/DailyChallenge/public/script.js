const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add 50 more emojis
    { emoji: '❤️', name: 'Heart' },
    { emoji: '😂', name: 'Face with Tears of Joy' },
    { emoji: '👍', name: 'Thumbs Up' },
    { emoji: '👎', name: 'Thumbs Down' },
    { emoji: '🤔', name: 'Thinking Face' },
    { emoji: '🤯', name: 'Exploding Head' },
    { emoji: '🥳', name: 'Party Popper' },
    { emoji: '🎉', name: 'Party Popper' },
    { emoji: '🎈', name: 'Balloon' },
    { emoji: '🎁', name: 'Gift' },
    { emoji: '🎂', name: 'Birthday Cake' },
    { emoji: '🍻', name: 'Beer Mug' },
    { emoji: '🍷', name: 'Wine Glass' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🍔', name: 'Hamburger' },
    { emoji: '🍟', name: 'French Fries' },
    { emoji: '🍦', name: 'Ice Cream' },
    { emoji: '🍣', name: 'Sushi' },
    { emoji: '🍜', name: 'Ramen' },
    { emoji: '🍱', name: 'Bento Box' },
    { emoji: '🍎', name: 'Apple' },
    { emoji: '🍌', name: 'Banana' },
    { emoji: '🍇', name: 'Grapes' },
    { emoji: '🍓', name: 'Strawberry' },
    { emoji: '🍒', name: 'Cherries' },
    { emoji: '🍍', name: 'Pineapple' },
    { emoji: '🍉', name: 'Watermelon' },
    { emoji: '🍊', name: 'Tangerine' },
    { emoji: '🍋', name: 'Lemon' },
    { emoji: '🥝', name: 'Kiwi Fruit' },
    { emoji: '🥑', name: 'Avocado' },
    { emoji: '🍅', name: 'Tomato' },
    { emoji: '🍆', name: 'Eggplant' },
    { emoji: '🌶️', name: 'Hot Pepper' },
    { emoji: '🥕', name: 'Carrot' },
    { emoji: '🥦', name: 'Broccoli' },
    { emoji: '🍄', name: 'Mushroom' }
  ];

let score = 0;
let correctIndexAnswer;
let roundCount = 1;
const gameDiv = document.getElementById('game');
const buttonStart = document.getElementById('buttonStart');

buttonStart.addEventListener('click', () =>{
    gameDiv.innerHTML = '';
    gameRound();
})

const gameRound = () => {
    gameDiv.innerHTML = `<div>Round ${roundCount}</div>`;
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const emoji = emojis[randomIndex];
    gameDiv.innerHTML += `<div>${emoji.emoji}</div>`
    let answers = ['','','','']
    correctIndexAnswer = Math.floor(Math.random() * 4);
    answers[correctIndexAnswer] = emoji.name;
    for (let i=0; i<4; i++) {
        let randomIndex
        do {
            randomIndex = Math.floor(Math.random() * emojis.length);
        }
        while (answers.includes(emojis[randomIndex].name));
        if (i !== correctIndexAnswer ) answers[i] = emojis[randomIndex].name
    }
    for (let i=0; i<4; i++) {
        gameDiv.innerHTML += `<button onClick={checkAnswer(${i})}>${answers[i]}</button>`
    }
}

checkAnswer=(i) => {
 if (i === correctIndexAnswer) score ++;
 roundCount++;
 if (roundCount <= 10) gameRound()
    else {
     gameDiv.innerHTML = `<div>Game Over! Your score is ${score}/10</div>`
}
 
}
