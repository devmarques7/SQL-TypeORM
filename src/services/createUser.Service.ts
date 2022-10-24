import AppDataSource from "../data-source";
import { IUserRequest } from "../interfaces/users";
import { hash } from "bcryptjs";
import { User } from "../entities/user.entity";

const createUserService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const incrypt = await hash(password, 10);
  const newUser = userRepository.create({
    name,
    email,
    isAdm,
    password: incrypt,
  });
  await userRepository.save(newUser);
  return newUser;
};

export default createUserService;
