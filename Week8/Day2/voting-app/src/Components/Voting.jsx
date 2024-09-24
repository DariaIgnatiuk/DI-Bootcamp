import { useState } from 'react'
import "../Voting.css"

const Voting = (props) => {

    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ])

      const vote = (item) => {
        item.votes++
        setLanguages([...languages])
      }

    return(
        <>
            <h1>Vote for your Language!</h1>
            {languages.map((item, index)=> {
                return(
                    <div key={index} class='div'>
                        <p>{item.votes}</p>  <p>{item.name}</p>
                        <button onClick={()=>vote(item)}>Click Here</button>
                    </div>
                )
            })}
            
        </>
    )
}

export default Voting;