import mongoose from 'mongoose'

const billSchema = new mongoose.Schema ({
    billItems: [{

        billID: {type: Number, require: true, unique: true},
        bookingTableID: {type: Number, require: true, unique: true},
        staffID: {type: Number, require: true},
        paymentMethod: {type: String, require: true},
        paymentTime: {type: Number, require: true},
    }
        
    ]
});

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill