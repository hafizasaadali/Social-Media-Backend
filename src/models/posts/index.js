import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import UserModel from "../user/index.js";



const postModel = sequelize.define('Post', {
  
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
   
  }
}, {
 timestamps:true
});

UserModel.hasMany(postModel);
postModel.belongsTo(UserModel);
export default postModel;