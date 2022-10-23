import { Request, Response } from "express";
import { IUser } from "../interfaces/users";

const listUserController = async (req: Request, res: Response) => {
  const registeredUser: IUser[] = await listUserService();

  return res.status(200).json({
    registeredUser,
  });
};

export default listUserController;
