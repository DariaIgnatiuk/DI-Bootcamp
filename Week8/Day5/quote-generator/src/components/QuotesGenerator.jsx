import React, { Component } from 'react';
import quotes from './QuotesDatabase'

const QuotesGenerator = () => {
    const[color, setColor] = React.useState('');
    const [quote, setQuote] = React.useState(quotes[0]);
    const colors = ['red', 'green', 'blue', '#D2691E', 'purple', '#8A2BE2', '#A52A2A','#5F9EA0', '#DC143C', '#008B8B', '#556B2F', '#8B0000' ];
    let usedQuotes = [];

    const getRandomNumber = (min, max) =>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const changeColor = () => {
        const randomNumbner = getRandomNumber(0, colors.length - 1);
        setColor(colors[randomNumbner]);
        document.getElementsByTagName('body')[0].style.backgroundColor = color;
        document.getElementsByTagName('button')[0].style.backgroundColor = color;
        document.getElementsByTagName('p')[0].style.color = color;
        document.getElementsByTagName('p')[1].style.color = color;
    }

    const changeQuote = () => {
        changeColor();
        const randomNumbner = getRandomNumber(0, quotes.length - 1);
        while (usedQuotes.includes(randomNumbner)) {
            const randomNumbner = getRandomNumber(0, quotes.length - 1);
        }
        setQuote(quotes[randomNumbner]);
        usedQuotes.push(randomNumbner);
    }

    return (
        <>
        <div>
            <p id='quote'>"{quote.quote}"</p>
            <p id='author'>-{quote.author? quote.author: 'Unknown'}-</p>
            <button onClick={()=>changeQuote()}>New quote</button>
        </div>
        </>
    )
}

export default QuotesGenerator;