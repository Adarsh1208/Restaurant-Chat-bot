var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    username : String,
    bookingDone : {
        type : Boolean,
        required : false
    },
    bookingDate : {
        type : Date,
        required : false
    }
})

module.exports = mongoose.model("User", UserSchema)