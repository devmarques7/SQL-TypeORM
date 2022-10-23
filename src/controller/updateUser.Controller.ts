import { Request, Response } from "express";

const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { updates } = req.body;

  const updatedUser: object = await updateUserService(id, updates);

  return res.status(201).json({
    message: "Updated user successfully",
    updatedUser,
  });
};

export default updateUserController;
