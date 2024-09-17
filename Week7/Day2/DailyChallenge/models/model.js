const {db} = require('../config/data.js')


const _getAllUsers = () => {
    return db('users').select('id', 'email', 'username', 'first_name', 'last_name').orderBy('id');
};

const _getUserById = (id) =>{
    return db('users').where({'id':id});
}

const _updateUser = (id,email,username,first_name,last_name) => {
    return db("users").update({ email:email,username:username,first_name:first_name,last_name:last_name}).where({'id':id});
};


const _register = (username, password) => {
    return db("hashpwd").insert({ username, password}, ["id", "username"]);
};

const _login = (username) => {
    return db("hashpwd").select('password').where({'username':username})
};

module.exports = {
    _register, 
    _login, 
    _getAllUsers, 
    _getUserById, 
    _updateUser
}