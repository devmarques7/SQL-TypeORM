import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const verifyEmailAndPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const { email, password } = req.body;
  const invalidEmail = users.find((user) => user.email === email);

  if (invalidEmail) {
    return res
      .status(400)
      .json({ message: "This email has already been used" });
  }

  if (!password) {
    return res.status(400).json({ message: "Missing Password" });
  }
  next();
};
export default verifyEmailAndPassword;
