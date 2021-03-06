const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        required: false
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
