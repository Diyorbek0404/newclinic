const mongoose = require("mongoose");

const newReklama = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model("Reklmama", newReklama)