const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "please add the user name"]
        },
        email: {
            type: String,
            required: [true, "please add the user email address"],
            unique: [true, "email address is already taken"]
        },
        password: {
            type: String,
            required: [true, "please add the user password"]
        },
        avatar: {
            type: String,
            default: "amongus.png"
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
