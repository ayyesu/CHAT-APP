const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, minlength: 3, maxlenght: 50},
        email: {
            type: String,
            required: true,
            minlength: 5,
            maxlenght: 255,
            unique: true,
        },
        password: {type: String, required: true, minlength: 8, maxlenght: 1024},
    },
    {timestamps: true},
);

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
