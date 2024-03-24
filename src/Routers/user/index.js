import { Router } from "express";
import userController from "../../Controller/user/index.js";
import uservalidator from "../../validator/user/index.js";

const userRouter = Router();

userRouter.get("/get-users", userController.getAllusers);

userRouter.post("/create-user", uservalidator.create, userController.create);

export default userRouter;
