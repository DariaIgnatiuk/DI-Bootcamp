import {Link} from 'react-router-dom'
import {useRef} from 'react'

const Header = (props) => {
    const searchRef = useRef()
    return (
        <>
        <input placeholder='Search...' ref={searchRef}/>
        <Link to='search'><button>Search</button></Link>
        <br/>
        <Link to='mountain'><button>Mountain</button></Link>
        <Link to='beaches'><button>Beaches</button></Link>
        <Link to='birds'><button>Birds</button></Link>
        <Link to='food'><button>Food</button></Link>
        </>
    )
}

export default Header