const mongoose = require('mongoose');

const downloadEventSchema = new mongoose.Schema({
    socket: String,
    songId: String,
    downloadTime: {
        type: Date,
        default: Date.now()
    }
})

const downloadEvent = mongoose.model("downloadEvent", downloadEventSchema, "downloadEvents");
module.exports = downloadEvent;