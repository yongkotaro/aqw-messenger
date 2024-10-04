import User from "../models/user-model.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {
    try {
        const { email, username, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            username,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = (req, res) => {
    res.send("Login page");
};

export const logout = (req, res) => {
    res.send("Logout page");
};