import  Express  from "express";
import allRouters from "./Routers/allRouters.js";
import { dbCon } from "./db/config.js";
import dbInit from "./db/dbInit.js";

const app = Express();
dbCon();
dbInit();
app.use(Express.json())
app.use(allRouters);


app.listen("5401");

export default app;