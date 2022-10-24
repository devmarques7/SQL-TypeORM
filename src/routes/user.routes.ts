import { Router } from "express";
import createUserController from "../controllers/createUser.controler";
import deleteUserController from "../controllers/deleteUser.controller";
import listAllUserController from "../controllers/listAllUser.controler";
import userLoginController from "../controllers/userLogin.controller";
import updatedUserController from "../controllers/userUpdate.controller";
import verifyAuth from "../middlewares/verifyAuth.middlewares";

import verifyEmailAndPassword from "../middlewares/verifyEmailAndPassword.middleware";
import validateInput from "../middlewares/verifyInputsUpdates.middlewares";
import verifyIsAdm from "../middlewares/verifyIsAdm.middleware";

const router = Router();

router.post("/users", verifyEmailAndPassword, createUserController);
router.post("/users", userLoginController);
router.get("/users", verifyAuth, verifyIsAdm, listAllUserController);
router.patch(
  "/users/:id",
  verifyAuth,
  verifyIsAdm,
  validateInput,
  updatedUserController
);
router.delete("/users/:id", verifyAuth, verifyIsAdm, deleteUserController);
router.post("/login", userLoginController);

export default router;
