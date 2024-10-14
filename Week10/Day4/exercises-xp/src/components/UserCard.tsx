import { ReactElement } from "react"

type UserCardT ={
    name?: string;
    age?: number;
}

const UserCard = ({name, age}:UserCardT):ReactElement => {
    console.log(name, age);
    
    return (
        <>
        <h2>UserCard</h2>
        {(name)? <p>{name}</p> :<p>Name is undentifined</p> }
        {(age)? <p>{age}</p> :<p>Age is undentifined</p> }

        </>
    )
}

export default UserCard