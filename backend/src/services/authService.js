import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const loginService = async (username, password) => {
  const user = await User.findOne({
    username,
  });

  if (!user) {
    throw new Error("Invalid Credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid Credentials");
  }

  return user;
};
