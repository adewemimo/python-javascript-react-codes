var events = require('events');
var eventEmitter = new events.EventEmitter();

const evenHandler = function (){
    console.log("Alarm has been triggered!");
}

const evenHandler2 = function (){
    console.log("call 911")
}

// trigger eventHandlers
eventEmitter
    .on('call' , evenHandler)
    .on('call2', evenHandler2);

eventEmitter.emit('call');

eventEmitter.emit('call2');



