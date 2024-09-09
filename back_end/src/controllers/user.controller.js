const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        if (!userName || !email || !password) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }

        const userAvailable = await User.findOne({ email });

        if (userAvailable) {
            return res.status(400).json({ message: "User already registered" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed password is: ", hashedPassword);

        const user = await User.create({
            userName,
            email,
            password: hashedPassword,
            avatar: 'uploads/amongus.png',
        });

        if (user) {
            res.status(201).json({ _id: user.id, email: user.email });
        } else {
            return res.status(400).json({ message: "User data not valid" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Avatar Upload Controller
const uploadAvatar = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (req.file) {
            // Assuming `uploads` is the directory where images are served
            user.avatar = `/uploads/${req.file.filename}`;
            await user.save();

            // Construct the full URL for the avatar
            const avatarUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

            res.status(200).json({ message: 'Avatar uploaded successfully', user: { ...user.toObject(), avatar: avatarUrl } });
        } else {
            return res.status(400).json({ message: 'No file uploaded' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }

        const user = await User.findOne({ email });

        // Compare password with hashed password
        if (user && await bcrypt.compare(password, user.password)) {
            const accessToken = jwt.sign({
                user: {
                    userName: user.userName,
                    email: user.email,
                    id: user.id,
                    avatar: user.avatar
                }
            },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "50m" }
            );
            res.status(200).json({ accessToken });
        } else {
            return res.status(401).json({ message: "Email or password is not valid" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCurrentUser = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update user info
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        } else if (user.id.toString() !== req.user.id) {
            return res.status(403).json({ message: "User doesn't have permission" });
        }

        const { userName, email, password } = req.body;
        const updateData = { userName, email };

        // Hash password if it is being updated
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }

        // Keep the current avatar if not updated
        if (req.body.avatar) {
            updateData.avatar = req.body.avatar;
        }

        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        } else if (user.id.toString() !== req.user.id) {
            return res.status(403).json({ message: "User doesn't have permission" });
        }

        await User.findByIdAndDelete(id);

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    userRegister,
    uploadAvatar,
    userLogin,
    getCurrentUser,
    getUsers,
    updateUser,
    deleteUser
};
