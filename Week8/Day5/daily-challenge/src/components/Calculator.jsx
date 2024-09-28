import React  from 'react';

function Calculator() {
    const[result, setResult] = React.useState('');

    const Add = (event) => {
        event.preventDefault();
        const num1 = Number(event.target.first.value);
        const num2 = Number(event.target.second.value);
        const operation = event.target.operation.value;
        if (operation === '+') {setResult(num1 + num2)}
        else if (operation === '-') {setResult(num1 - num2)}
        else if (operation === '*') {setResult(num1 * num2)}
        else if (operation === '/') {
            if(num2 === 0) {alert('Cannot divide by zero')}
            else {setResult(num1 / num2)}
        } else {setResult('Please select a valid operation')}
    }

    return (
        <>
        <h1>Calculator</h1>
        <form onSubmit={()=>Add(event)}> 
            <input name='first'/>
            <input name='second'/>
            <br/>
            <select name='operation'>
                <option>Select operation</option>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
            </select> <br/>
            <input id='button'type='submit' value='Calculate!'/>
        </form>
        <div id='result'>{result}</div>
        </>
    )
}

export default Calculator