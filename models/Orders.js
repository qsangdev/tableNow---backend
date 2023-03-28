const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema(
    {
    dishID: {type: Number, required: true, },
    billID: {type: Number, required: true, },
    oderQuantity: {type: Number, required: true},
    oderPrice: {type: Number, required: true},
    oderDiscount: {type: Number, required: true},
    oderToltal: {type: Number, required: true},
    },
    {
    timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;