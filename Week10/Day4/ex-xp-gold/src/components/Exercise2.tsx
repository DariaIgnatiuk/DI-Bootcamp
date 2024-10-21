import { UserProfile } from "./UserProfile"
const Exercise2 = ({name, age, bio}: UserProfile) => {
    return (
        <>
        <h2>Exercise 2: User Profile</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Bio: {bio}</p>
        </>
    )

}

export default Exercise2