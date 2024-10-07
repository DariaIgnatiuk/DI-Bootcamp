
import React, {useState} from 'react'
import ShowBooks from './ShowBooks.jsx';

const BookList = (props) => {
    const [choice, setChoice] = useState('all')

    return (
        <>
        <button onClick={()=>setChoice('all')}>All Books</button>
        <button onClick={()=>setChoice('horror')}>Horror</button>
        <button onClick={()=>setChoice('fantasy')}>Fantasy</button>
        <button onClick={()=>setChoice('science fiction')}>Science Fiction</button>

        <ShowBooks choice={choice}/>
        </>
    )
}

export default BookList