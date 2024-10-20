const User = require("../schema/RegisterSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwt_secret = process.env.JWT_SECRET;

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, jwt_secret, { expiresIn: "1d" });
};

const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: "User not registered" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).send({ message: "Wrong password" });
        }

        const token = generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true
            // expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            // secure: process.env.NODE_ENV === "production",
            // sameSite: 'None',
        });

        res.status(200).send({ message: "Login successful" });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).send({ message: "Server error. Please try again later." });
    }
};

module.exports = loginHandler;
