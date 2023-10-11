const UserSchema = require("../model/userModel.js");

// const login = (req,res)=>{

// }

const signup = (req, res) => {
  // email exist check
  UserSchema.create({
    username: req.body.username,
    email: req.body.email,
    number: req.body.number,
    password: req.body.password,
  })
    .then((result) => res.status(200).json({ msg: "User Created" }))
    .catch((err) =>
      res
        .status(500)
        .json({ msg: "Something Went Wrong", error_code: "SERVER_ERROR" })
    );
};

module.exports = { signup };
