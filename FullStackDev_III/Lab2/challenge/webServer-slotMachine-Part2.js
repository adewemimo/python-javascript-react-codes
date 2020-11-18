const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

let amount
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    var q = url.parse(req.url, true);
    switch (q.pathname){
        case '/spin':
            console.log('Spinning...');
            if (amount) {
                console.log(`amount lost: ${amount}`)
            }
            amount = undefined
            break;
        case '/play':
            amount = q.query['amount']
            console.log(`Playing... :${amount}`);
            break;
        default:
            console.log('Please play or spin');
            break;
    }
    res.end('Slot Machine\n');
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
});

server.on('close', () => {
    console.log('closing ports')
})