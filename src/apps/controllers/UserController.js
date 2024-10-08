const Users = require("../models/Users");
class UserController {
  async create(req, res) {
    const verifyUser = await Users.findOne({
      where: { email: req.body.email },
    });

    if (verifyUser) {
      return res.status(200).json({ message: "User already exits!" });
    }

    const user = await Users.create(req.body);
    
    if(!user){
      return res.status(200).json({ message: "Failed to create a user!" });

    }
    return res.status(200).send({ message: "User created!" });
  }
}

module.exports = new UserController();
