import UserModel from "../../models/user/index.js";
const userController = {
  getAllusers: async (req, res) => {
    try {
      const allUsers = await UserModel.findAll();
      res.json({
        message: "Got All Users",
        users: allUsers,
      });
    } catch (error) {
      console.log(error);
      res.json({
        message: "Internal Server Error",
        error,
      });
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

export default userController;
