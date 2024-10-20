const User = require("../schema/RegisterSchema");
const bcrypt = require("bcrypt");

const RegisterHandler = async (req, res) => {
    try {
        const { email, password, cPassword } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(403).json({ success: false, message: "User already exists. Please try with another email!" });
        }

        if (password !== cPassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match!" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            ...req.body,
            password: hashPassword,
        });

        await newUser.save();
        // console.log(token)

        // res.cookie("user_Id", newUser._id, {
        //     maxAge: 24 * 60 * 60 * 1000,
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production', 
        //     sameSite: 'Strict'
        // });

        return res.status(200).json({ success: true, message: "User registered successfully!" });

    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
};

module.exports = RegisterHandler;
