import { Router } from "express";
import userRouter from "./user/index.js";
import postsRouters from "./posts/index.js";
import commentsModel from "./comments/index.js";
import authenticationRouter from "./authentication/index.js";

const allRouters = Router();
allRouters.use(userRouter);
allRouters.use(postsRouters);
allRouters.use(commentsModel);
allRouters.use(authenticationRouter)


export default allRouters;
