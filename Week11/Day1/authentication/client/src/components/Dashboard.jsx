import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = (props) => {
    const [users, setUsers] = useState('');
    const [msg, setMsg] = useState('');

useEffect(() => {all()},[])

    const all = async () => {
        try {
            const responce = await axios.get('http://localhost:5001/user/all', {
                withCredentials:true
            })
            if (responce.status === 200) {
                setUsers(responce.data);
                setMsg('');
            }
        } catch (error) {
            console.log(error);
            setMsg(error.responce.data.message)
        }
    }

    return (
        <>
        <h2>Dashboard / Home</h2>
        {
            users && users.map(item => {
                return (
                    <div key={item.id}>{item.email}</div>
                )
            })
          
        }
          <h3>{msg}</h3>
        </>
    );
};


export default Dashboard