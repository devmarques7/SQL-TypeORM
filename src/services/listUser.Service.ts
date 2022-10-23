import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const listUserService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const listUser = await userRepository.find();

  return listUser;
};

export default listUserService;
