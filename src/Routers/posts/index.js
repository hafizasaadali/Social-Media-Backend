import { Router } from "express";
import postController from "../../Controller/posts/index.js";
import postsvalidator from "../../validator/posts/index.js";
import middleWare from "../../middleWare/index.js";

const postsRouters = Router();

postsRouters.get("/get-posts", postController.getAllPosts);
postsRouters.post("/create-post",middleWare,postsvalidator.create, postController.createPost);


export default postsRouters;
