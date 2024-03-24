import { Router } from "express";
import commentsModel from "../../Controller/comments/index.js";
import commetsControllers from "../../Controller/comments/index.js";
import commentsvalidator from "../../validator/comments/index.js";
import middleWare from "../../middleWare/index.js";

const commentsRouters = Router();

commentsRouters.get("/get-comment", commetsControllers.getAllComments);
commentsRouters.post(
  "/create-comment",middleWare,
  commentsvalidator.create,
  commetsControllers.createcomments
);

export default commentsRouters;
