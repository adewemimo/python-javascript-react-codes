const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

const eventEmitter = require('events');

const emitter = new eventEmitter;

const printBuffer = ()=>{
    for (item of buf){
        console.log(item);
    }
    console.log('Buffer converted')
}

emitter.on('convert', printBuffer);

emitter.emit('convert');
