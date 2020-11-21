const say = require('say');

//Use default system voice and speed
say.speak('Hello');

//Stop the text currently being spoken
say.stop();

const sorryDave = () => {
    say.speak("I'm sorry, Dave");
}

//More complex example (with an os x voice) and slow speed
say.speak("Hello?" ,"Alex", 0.5);

setTimeout(sorryDave, 5000);


