import {useSelector} from 'react-redux'

import { selectBooks, selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from './state/selectors.js';

const ShowBooks = ({choice}) => {

    let books = [];

    if (choice === 'horror') { books = useSelector(selectHorrorBooks)}
    else if (choice === 'fantasy') { books = useSelector(selectFantasyBooks)}
    else if (choice ==='science fiction') { books = useSelector(selectScienceFictionBooks)}
    else { books = useSelector(selectBooks)}

    
    return (
        <>
        {books.map(book => {
            return (
                <div key={book.id}>
                    <p>{book.title} - {book.author} ({book.genre})</p>

                </div>
            )
        })}
        </>
    )
}

export default ShowBooks