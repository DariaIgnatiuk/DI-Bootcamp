const {
    _register,
    _login,
    _getAllUsers, 
    _getUserById, 
    _updateUser
} = require('../models/model.js')
const bcrypt = require('bcrypt');
const {db} = require('../config/data.js')
const saltRounds = 10;

const getAllUsers = (req, res) =>{
    _getAllUsers()
  .then(data => {
    res.json(data);
  })
  .catch((e) =>{
    console.log(e);
  })
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await _getUserById(id)
      res.json(data)
    } catch (error) {
      res.status(404).json({message:'No user with such id'})
    }

}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email,username,first_name,last_name} = req.body;
    try {
        const data = await _updateUser(id,email,username,first_name,last_name);
        getAllUsers(req,res);
    } catch (error) {
        res.status(404).json({ message: "user to update not found" });
    }
  }

  const register = async (req, res) => {
    const { username, password} = req.body;   
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const trx = await db.transaction();
    try {
        const data = await _register(username, hashedPassword).transacting(trx);;
        console.log(data);
        res.json(data)
        await trx.commit();
    } catch (error) {
        res.status(404).json({ message: "something went wrong" });
        await trx.rollback();
    }
  }

  const login = async (req, res) => {
    const { username, password} = req.body;   
    try {
        const data = await _login(username);
        const pass = data[0].password;
        bcrypt.compare(password, pass).then((match) => {
            if(match) {res.json({message:"success"})}
            else {res.json({message:"login unseccessful"})}
        })
    } catch (error) {
        res.status(404).json({ message: "something went wrong" });
    }
  }

module.exports = {
    register, 
    login, 
    getAllUsers, 
    getUserById, 
    updateUser
}