const {db} = require('../config/data.js')


const _getAllUsers = () => {
    return db('users2').select('id', 'first_name', 'last_name', 'email', 'username', 'password').orderBy('id');
};

const _getUserById = (id) =>{
    return db('users2').where({'id':id});
}

const _updateUser = (id,first_name,last_name, email,username, password) => {
    return db("users2").update({ email:email,username:username,first_name:first_name,last_name:last_name, password:password},['id']).where({'id':id});
};


const _registerUser = (first_name,last_name, email,username, password) => {
    return db("users2").insert({ first_name,last_name, email,username, password}, ["id"]);
};

const _loginUser = (username) => {
    return db("users2").select('username','password').where({'username':username})
};

module.exports = {
    _registerUser, 
    _loginUser, 
    _getAllUsers, 
    _getUserById, 
    _updateUser
}