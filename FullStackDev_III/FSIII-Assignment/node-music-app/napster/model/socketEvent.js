
const mongoose = require('mongoose');
const socket = require("socket.io");


const socketEventSchema = new mongoose.Schema({
    socket: String,
    type: {
        type: String,
        enum: ["Connection", "Disconnect"]
    },
    eventTime: {
        type: Date,
        default: Date.now()
    }
})

const socketEvent = mongoose.model("socketEvent", socketEventSchema, "socketEvents");
module.exports = socketEvent;