import bcrypt from "bcryptjs";
import User from "../models/User.js";

const createDefaultUsers = async () => {
  try {
    const admin = await User.findOne({
      username: "admin",
    });

    if (!admin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);

      await User.create({
        username: "admin",
        password: hashedPassword,
        role: "ADMIN",
      });

      console.log("Default Admin Created");
    }

    const packaging = await User.findOne({
      username: "packing",
    });

    if (!packaging) {
      const hashedPassword = await bcrypt.hash("packing123", 10);

      await User.create({
        username: "packing",
        password: hashedPassword,
        role: "PACKAGING",
      });

      console.log("Default Packaging User Created");
    }
  } catch (error) {
    console.log(error);
  }
};

export default createDefaultUsers;
