const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema(
    {
    dishID: {type: Number, required: true, unique: true},
    dishName: {type: String, required: true},
    restaurentID: {type: Number, required: true, unique: true},
    dishType: {type: String, required: true},
    dishDescribe: {type: String, required: true},
    dishImage: {type: Image, required: true},
    dishQuantity: {type: Number, required: true},
    dishPrice: {type: Number, required: true},
    dishDiscount: {type: Number, required: true},
    },
    {
    timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;