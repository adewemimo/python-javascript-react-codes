
let n = 11;

const NumberAtIntervals = ()=>{
    n--;
    console.log(n);

    if (n===1){
        clearInterval(intervalID);
        console.log('time is up...');

    }

}
const intervalID = setInterval(()=>{
    NumberAtIntervals();
},1000);










