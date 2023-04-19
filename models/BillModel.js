const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  billItems: [
    {
      tableID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Table",
      },
      staffID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Staff",
      },
      restaurantID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "ProfileRestaurant",
      },
      orderID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Order",
      }, // bao gom ten + sdt khach hang, ca lam viec, so nguoi an
      dishID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Dish",
      }, // bao gom ten mon, so luong, don gia, giam gia
      paymentMethod: { type: String, require: true },
      totalPay: { type: Number, require: true },
    },
  ],
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
