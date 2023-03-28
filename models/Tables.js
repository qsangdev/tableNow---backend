const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema(
    {
    tableID: {type: Number, required: true, unique: true},
    restaurentID: {type: Number, required: true, unique: true},
    tableName: {type: String, required: true},
    active: {type: Boolean, default: false, required: true},
   
    },
    {
    timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;