import AppDataSource from "../data-source";

import { IUser, IUserRequest } from "../interfaces/users";
import { hash } from "bcrypt";
import { User } from "../entities/user.entity";

const createUserService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest): Promise<IUser> => {
  console.log(name, email, password, isAdm);
  const userRepository = AppDataSource.getRepository(User);

  const invalidEmail = await userRepository.findOneBy({
    email,
  });

  if (invalidEmail) {
    throw new Error("Email is already in use");
  }

  const incrypted = await hash(password, 10);

  const newUser = userRepository.create({
    name,
    email,
    password: incrypted,
    isAdm,
  });

  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
