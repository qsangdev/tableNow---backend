const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema(
    {
    restaurentName: {type: String, required: true},
    restaurentID: {type: Number, unique: true, unique: true},
    restaurentAdress: {type: String, required: true},
    restaurentTable: {type: Number, required: true},
    openTime: {type: Number, required: true},
    closeTime: {type: Number, required: true},
    restaurentDescribe: {type: String, required: true},
    reviewImages: {type: String, required: true},
    },
    {
    timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;