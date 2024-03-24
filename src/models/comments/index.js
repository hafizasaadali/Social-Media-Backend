import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import UserModel from "../user/index.js";
import postModel from "../posts/index.js";



const commentsModel = sequelize.define('comments', {
  
  
  description: {
    type: DataTypes.STRING
   
  }
}, {
 timestamps:true
});

UserModel.hasMany(commentsModel);
commentsModel.belongsTo(UserModel);
postModel.hasMany(commentsModel);
commentsModel.belongsTo(postModel);


export default commentsModel;