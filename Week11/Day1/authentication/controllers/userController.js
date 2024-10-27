const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  registerUser: async (req, res) => {
    const { password, email } = req.body;

    try {
      const user = await userModel.createUser(password, email);
      res.status(201).json({
        message: "User registered successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      if (error.code === "23505") {
        return res.status(400).json({ message: "Email already exists" });
      }
      res.status(500).json({ message: "internal server error" });
    }
  },
  loginUser: async (req, res) => {
    const { password, email } = req.body;
    try {
      const user = await userModel.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ message: "User not found..." });
      }

      const passwordMatch = await bcrypt.compare(password + "", user.password);

      if (!passwordMatch) {
        return res.status(404).json({ message: "Wrong password" });
      }

      /** generate token */
      const accessToken = jwt.sign(
        { userid: user.id, email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "60s" }
      );

      /** set token in httpOnly cookie */
      res.cookie("token", accessToken, {
        maxAge: 60 * 1000,
        httpOnly: true,
      });

      res.json({
        message: "Login successfully",
        user: { userid: user.id, email: user.email },
        token: accessToken,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "internal server error" });
    }
  },
  getUsers: async(req, res) => {
    try {
        const users = await userModel.getUsers();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
  },
  logoutUser: (req, res) => {
    res.clearCookie("token");
    req.cookies.token=null;
    delete req.cookies.token;
    delete req.headers['x-access-token'];
    res.sendStatus(200);
  },
  verifyAuth:(req, res) => {
    const {id, email} = req.userinfo;
          /** generate token */
          const accessToken = jwt.sign(
            { userid: id, email: email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "60s" }
          );
    
          /** set token in httpOnly cookie */
          res.cookie("token", accessToken, {
            maxAge: 60 * 1000,
            httpOnly: true,
          });
          res.json({
            message: "Verify Auth",
            user: { userid: id, email: email },
            token: accessToken,
          });
          
  }
};