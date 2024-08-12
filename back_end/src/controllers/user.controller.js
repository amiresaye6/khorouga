const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        if (!userName || !email || !password) {
            return res.status(400).json({ message: "all fields are mandatory" });
        }

        const userAvailable = await User.findOne({ email });

        if (userAvailable) {
            return res.status(400).json({ message: "user already registerd" });
        }

        // hash pasword
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashed password is : ", hashedPassword);

        const user = await User.create(
            {
                userName,
                email,
                password: hashedPassword
            }
        );

        if (user) {
            res.status(201).json({ _id: user.id, email: user.email })
        }
        else {
            return res.status(400).json({ message: "User data not valid" });
        }

        // res.status(200).json({ message: "register a new user" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "all fields are mandatory" });
        }

        const user = await User.findOne({ email });

        // compare password with hashed passord
        if (user && await bcrypt.compare(password, user.password)) {
            const accessToken = jwt.sign({
                user: {
                    userName: user.userName,
                    email: user.email,
                    id: user.id
                }
            },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "50m" }
            );
            res.status(200).json({ accessToken });
        }
        else {
            return res.status(401).json({ message: "email or passowrd is not valid" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getCurrentUser = async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    userRegister,
    userLogin,
    getCurrentUser
}
