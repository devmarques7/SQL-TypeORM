import { Request, Response } from "express";
import createUserService from "../services/createUser.Service";

const createUserController = async (request: Request, response: Response) => {
  try {
    const newRequestUser = request.body;
    console.log(request.body);
    const newUser = await createUserService(newRequestUser);
    const { password, ...rest } = newUser;

    return response.status(201).json(rest);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(404).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default createUserController;
