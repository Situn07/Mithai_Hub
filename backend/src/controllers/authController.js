import User from "../models/User.js";

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
            await User.findOne({
                username,
            });

        if (!user) {
            return res.status(404).json({
                success: false,
                message:
                    "User not found",
            });
        }

        if (
            user.password !== password
        ) {
            return res.status(401).json({
                success: false,
                message:
                    "Invalid password",
            });
        }

        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                username:
                    user.username,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message:
                error.message,
        });
    }
};