import UserModel from "../models/user/index.js";
import postModel from "../models/posts/index.js";
import commentsModel from "../models/comments/index.js";


const dbInit = async() =>{
    await UserModel.sync({
        alter:true,
        force:false
    })
    await postModel.sync({
        alter:true,
        force:false
    }) 
    await commentsModel.sync({
        alter:true,
        force:false
    })
};


export default dbInit;