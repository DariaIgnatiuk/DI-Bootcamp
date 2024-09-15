let score = 0;
let index = 0;

const apiRequest = async (url,options) => {
    try {
        const res = await fetch (url,options);
        console.log('res',res);
        const data = await res.json();  
        console.log('data',data);
        
        return data;
    } catch (error) {
        console.log(error);
    }
}

const showResult = () => {
    document.getElementById('answer').style.display='none';
    
    apiRequest(`http://localhost:3000/quiz/score`).then(res =>{
        console.log(res);
        
        let html = `<div>
    <p>Quiz is finished!</p>
        <p>Your score:</p>
    <p>${res}</p>
    </div> ` 
        document.getElementById('quiz').innerHTML = html;
    }
    )

}

const submitAnswer = (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;
    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({answer, index})
    }
    apiRequest(`http://localhost:3000/quiz/`, options).then((reply) =>{
        document.getElementById('answer').innerHTML = `<div>${reply} </div>`
    })
    index ++;
    if (index < 3) {showQuestion()}
    else {showResult()};
}

const showQuestion = () =>{
        apiRequest(`http://localhost:3000/quiz/${index}`).then(res => {
            const html = `
            <form onSubmit="submitAnswer(event)">
                <p id="question">${res.question}</p>
                <input type="text" name="answer"/>
                <input type="submit" value="Answer"/>
            </form>`
            document.getElementById('quiz').innerHTML = html;
            
        })}





