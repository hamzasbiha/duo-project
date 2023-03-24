const mongoose = require("mongoose")


const ChatModel = mongoose.Schema({

    chatName: { type: String, trime: true },
    isGroupChat: { type: Boolean, default: false },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    lastestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timeStamps: true,
});

const chat=mongoose.model("Chat",ChatModel)