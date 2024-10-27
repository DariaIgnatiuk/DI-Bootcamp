import {Button, Stack} from "@mui/material";
import {Link} from "react-router-dom"
import axios from "axios";

const logout = async() => {
    try {
        const responce = await axios.delete('http://localhost:5001/user/logout')
        if (responce.status === 200) {
            console.log(responce.status);
            
        }
    } catch (error) {
        console.log(error);
        
    }
}

const Header = (props) => {
    return (
        <Stack spacing={2} direction={'row'}>
        <Button LinkComponent={Link} to='/'>Dashboard</Button>
        <Button LinkComponent={Link} to='/login'>Login</Button>
        <Button LinkComponent={Link} to='/register' >Register</Button>
        <Button LinkComponent={Link} to='/admin' >Admin Panel</Button>
        <Button onClick={logout}>Logout</Button>
        </Stack>
    );
};


export default Header