import { loginService } from "../services/authService.js";
import { generateJwtToken } from "../utils/jwt.js";

export const login = async (
  req,
  res
) => {
  try {
    const {
      username,
      password,
    } = req.body;

    const user =
      await loginService(
        username,
        password
      );

    const token =
      generateJwtToken(user);

    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        username:
          user.username,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message:
        error.message,
    });
  }
};