import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const loginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const registeredUser = await userRepository.find();

  const user = registeredUser.find((user) => user.email === email);

  if (!user) {
    throw new Error("Invalid email address or password");
  }

  const validatePassword = bcrypt.compare(password, user.password);

  if (!validatePassword) {
    throw new Error("Invalid email address or password");
  }

  const token = jwt.sing({ id: user.id, isAdm: user.isAdm }, "SECRET_KEY", {
    expiresIn: "24h",
  });

  return token;
};
