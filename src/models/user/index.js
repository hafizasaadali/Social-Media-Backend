import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const UserModel = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default UserModel;
