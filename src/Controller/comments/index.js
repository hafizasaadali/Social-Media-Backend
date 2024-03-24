import commentsModel from "../../models/comments/index.js";
import postModel from "../../models/posts/index.js";
// import UserModel from "../../models/user/index.js";

const commetsControllers = {
  getAllComments: async (req, res) => {
    try {
      const allPosts = await commentsModel.findAll();
      res.json({
        message: "got all comments",
        posts: allPosts,
      });
    } catch (error) {
      res.json({
        message: "Internal server error",
        error,
      });
      console.log(error, "error");
    }
  },
  createcomments: async (req, res) => {
    try {
      const { description,PostId } = req.body;
      const comments = await commentsModel.create({
    
        description,
        PostId,id:req.user.id
      });
      res.json({
        message: "comments create ho gai he ",
        comments,
      });
    } catch (error) {}
  },
};

export default commetsControllers;
