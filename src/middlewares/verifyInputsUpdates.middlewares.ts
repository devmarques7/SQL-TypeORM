import { Request, Response, NextFunction } from "express";

const validateInput = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm, isActive, id } = req.body;

  if (isAdm || isActive || id) {
    return res.status(400).json({ message: "Invalid Update Authorization" });
  }

  next();
};
export default validateInput;
