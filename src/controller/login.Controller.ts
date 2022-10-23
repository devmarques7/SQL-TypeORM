import { Request, Response } from "express";
import { request } from "http";
import { IUser } from "../interfaces/users";
import createUserService from "../services/createUser.Service";

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userLogin: IUserLogin = await createUserService(email, password);

  return res.status(201).json({
    userLogin,
  });
};

export default loginController;
