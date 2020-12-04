const emitter = require('events').EventEmitter;

myEmitter = new emitter();

const playGame = num => {
  myEmitter.on('ping', () => {
    console.log('ping..');
  });

  myEmitter.on('pong', () => {
    console.log('pong..');
  });

  let count = 1;
  let timer = 2000;

  while (count <= num) {
    setTimeout(() => {
      console.log(`Round ${count}`);
      myEmitter.emit('ping');
      myEmitter.emit('pong');
    }, timer * count);
    count++;
  }

  setInterval(() => {
      console.log('game is completed...');
      process.exit(0);
  }, timer * count)

  //   const pingPongInterval = setTimeout(() => {
  //     let count = 1;
  //     while (count <= num) {
  //       console.log('Round', count++);

  //       myEmitter.emit('ping');

  //       myEmitter.emit('pong');
  //     }
  //     console.log('game is completed...');
  //     process.exit(0);
  //   }, 2000);
};




playGame(3);
