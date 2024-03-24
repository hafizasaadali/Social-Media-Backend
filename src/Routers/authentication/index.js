import { Router } from "express";
import authenticationController from "../../Controller/authentication/index.js";

const authenticationRouter = Router();

authenticationRouter.get("/login", authenticationController.login);

export default authenticationRouter;
