import { ReactElement, useEffect, useState } from "react"

type Users = {
    id:number;
    firstName:string;
    lastName: string;
    age:number;
}


const Fetch = ():ReactElement => {
    const [users, setUsers] = useState<Users[]>([])

    const fetchUsers = async() => {
        const res =  await fetch('https://dummyjson.com/users');
        const data = await res.json();
        let usersData = [];
        for (const user of data.users) {
            const currentUser:Users = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age
            }
            usersData.push(currentUser)
        }
        setUsers(usersData);
        
   }
   

    useEffect( ()=> {
        fetchUsers();
        console.log('users',users.length);
    }, [])

    return (
        <>
        fetch
        {users.map ((user) =>{
            return (
                <div key={user.id}>
                    <h2>User: {user.firstName} {user.lastName}</h2>
                    <p>Age: {user.age}</p>
                </div>
            )
        })}

        </>
        
    )
}

export default Fetch