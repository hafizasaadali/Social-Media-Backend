import UserModel from "../../models/user/index.js";
import Jwt  from "jsonwebtoken";

const authenticationController = {
  login: async (req, res) => {
    try {
      const data = req.body;
      const { email, password } = data;
      const user = await UserModel.findOne({
        where: { email, password },
      });
      if (!user) {
        res.json({
          message: "invalid operation",
        });
      }
      let token = Jwt.sign(
        { email: user.email, password: user.password, id: user.id },
        "gymrat"
      );
      res.json({
        message: "user login",
        user,
        token,
      });
    } catch (error) {
        res.json({error})
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      const data = req.body;
      const { firstName, lastName, email, password } = data;
      const user = await UserModel.create({
        firstName,
        lastName,
        email,
        password,
      });
      res.json({
        message: "user created",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default authenticationController;
