const UserFavovireAnimals = (props) => {
    const {animals} = props;

    return(
        <>
            <ul>
                {animals.map ((item, index) => <li key={index}>{item}</li>)}
            </ul>
            
        </>
    )
}

export default UserFavovireAnimals;