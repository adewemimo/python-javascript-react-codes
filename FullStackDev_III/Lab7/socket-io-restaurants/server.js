const http = require('http'),
  url = require('url'),
  fs = require('fs'),
  io = require('socket.io');

const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/RestaurantApp';

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log('Mongoose connected successfully');
    },
    error => {
      console.log('Mongoose could not connected to database: ' + error);
    }
  );

const Restaurant = require('./model/restaurant');
const Order = require('./model/order');

const server = http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case '/':
      fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) return send404(res);
        res.writeHead(200, {
          'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html',
        });
        res.write(data, 'utf8');
        res.end();
      });
      break;

    default:
      send404(res);
  }
});
const send404 = function (res) {
  res.writeHead(404);
  res.write('404');
  res.end();
};

const PORT = 8080;
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`));

// socket.io, I choose you
const ioServer = io.listen(server);

// socket.io setup and manager
ioServer.on('connection', function (socket) {
  // now we have a client object!
  console.log('Connection accepted.');

  // event listeners
  socket.on('message', function (message) {
    console.log(`Recieved message: ${message} - from client`);
    socket.emit('msgreceived');
  });

  socket.on('disconnect', function () {
    console.log('Disconnected...');
  });

  socket.on('get-restaurants', async () => {
    console.log('server - get-restarants called');

    /*Restaurant.find((error, documents) => {
      if (error) console.log(`Error occurred on Restaurant.find(): ${error}`);
      else {
        console.log(`Restaurant.find() returned documents: ${documents}`);
        const data = documents.map(x => x => x.name);
        socket.emit("restaurants-data", data);
      }
    });*/

    Restaurant.find(
      { city: 'Queens', cuisine: 'Delicatessen' },
      (error, documents) => {
        if (error) console.log(`Error occurred on Restaurant.find(): ${error}`);
        else {
          console.log(
            'Restaurant.find({}) returned this many documents:',
            documents.length
          );
          const data = documents.map(x => ({
            name: x.name,
            cuisine: x.cuisine,
          }));
          console.log('data', data);
          socket.emit('restaurants-data', JSON.stringify(data));
        }
      }
    );
  });

  socket.on('get-orders', () => {
    console.log('server - get-orders called');

    Order.find((error, documents) => {
      if (error) console.log(`Error occurred on order.find(): ${error}`);
      else {
        console.log(`order.find() returned documents: ${documents}`);
        //const data = documents.map(x => x => x.customer_name);
        socket.emit('order-data', JSON.stringify(documents));
      }
    });
  });

  socket.on('add-order', () => {
    console.log('server - add-orders called');

    Order.create({ orderId: "001", customer_name: 'Seun Soetan', item: 'Chicken Burger' })
      .then(() => {
        console.log('here')
        socket.emit('order-data-added');
      })
      .catch(err => console.log(err));
  });
});
