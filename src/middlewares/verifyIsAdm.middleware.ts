import { NextFunction, Request, Response } from "express";
import { IPatch } from "../interfaces/users";
import jwt from "jsonwebtoken";

const verifyIsAdm = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  let token = req.headers.authorization;

  token = token!.split(" ")[1];

  const user = jwt.decode(token) as IPatch;

  if (user!.id !== id && user!.isAdm === false) {
    return res.status(401).json({ message: "Authorization admin denied" });
  }
  next();
};

export default verifyIsAdm;
