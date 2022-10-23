import { Router } from "express";
import createUserController from "../controller/createUser.Controller";

import listUsersController from "../controller/lisUsers.Controller";
import loginController from "../controller/login.Controller";
import updateUserController from "../controller/updateUser.Controller";
import verifyToken from "../middlewares/verifyToken.middlewars";

export const router = Router();

router.post("/users", createUserController);
// router.get("/users", createUserController);
// router.get("/users", listUsersController);
// router.post("/login", loginController);
// router.patch("/users/:id", verifyToken, updateUserController);
