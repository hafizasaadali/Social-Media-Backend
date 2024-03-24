import postModel from "../../models/posts/index.js";
// import UserModel from "../../models/user/index.js";

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const allPosts = await postModel.findAll();
      res.json({
        message: "got all posts",
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
  createPost: async (req, res) => {
    try {
      const { title, description } = req.body;
      const post = await postModel.create({
        title,
        description,
       id: req.user.id
      });
      res.json({
        message: "post create ho gai he ",
        post,
      });
    } catch (error) {}
  },
};

export default postController;
