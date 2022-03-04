const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Chat", ChatSchema)