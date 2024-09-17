const {
    _registerUser,
    _loginUser,
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
      const data = await _getUserById(id);
      console.log(data.length);
      if (data.length === 0 ) {
        res.status(404).json({message:'No user with such id'})
      }
      else {
        res.json(data)}
    } catch (error) {
      res.status(404).json({message:'No user with such id'})
    }

}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { first_name,last_name, email,username, password} = req.body;
    try {
        const data = await _updateUser(id, first_name,last_name, email,username, password);
        if (data.length === 0 ) {
          res.status(404).json({message:"user to update not found"})
        }
        else {
          getAllUsers(req,res);}
    } catch (error) {
        res.status(404).json({ message: "user to update not found" });
    }
  }

  const registerUser = async (req, res) => {
    const { first_name,last_name, email,username, password} = req.body;   
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const trx = await db.transaction();
    try {
        const data = await _registerUser(first_name,last_name, email,username, hashedPassword).transacting(trx);;
        res.json(data)
        await trx.commit();
    } catch (error) {
        res.status(404).json({ message: "something went wrong" });
        await trx.rollback();
    }
  }

  const loginUser = async (req, res) => {
    const { username, password} = req.body;   
    try {
        const data = await _loginUser(username);
        if (data.length === 0)  { res.status(404).json({ message: "username doesn't exist" })}
        else{
        const pass = data[0].password;
        bcrypt.compare(password, pass).then((match) => {
            if(match) {res.json(data)}
            else {res.json({message:"wrong data"})}
        })}
    } catch (error) {
        res.status(404).json({ message: "something went wrong" });
    }
  }

module.exports = {
    registerUser, 
    loginUser, 
    getAllUsers, 
    getUserById, 
    updateUser
}