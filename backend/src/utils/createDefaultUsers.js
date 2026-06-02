import User from "../models/User.js";

const createDefaultUsers = async () => {
  try {
    const admin = await User.findOne({
      username: "admin",
    });

    if (!admin) {
      await User.create({
        username: "admin",
        password: "admin123",
        role: "ADMIN",
      });

      console.log("Default Admin Created");
    }

    const packaging = await User.findOne({
      username: "packing",
    });

    if (!packaging) {
      await User.create({
        username: "packing",
        password: "packing123",
        role: "PACKAGING",
      });

      console.log("Default Packaging User Created");
    }
  } catch (error) {
    console.log(error);
  }
};

export default createDefaultUsers;
