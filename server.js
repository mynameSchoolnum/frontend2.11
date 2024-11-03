#!/usr/bin/env node
// const express = require('express');
// const db = require('./config/mongoose');
// const app = require('./config/express');
 const debug = require('debug')('portfolio-backend:server');
// const http = require('http');
// const indexRouter = require('./routes/index');

// const port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

// db();
// const server = http.createServer(app);

// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);

// function normalizePort(val) {
//   const port = parseInt(val, 10);
//   if (isNaN(port)) return val;
//   if (port >= 0) return port;
//   return false;
// }

// function onError(error) {
//   if (error.syscall !== 'listen') throw error;
//   const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges');
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use');
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// }

// function onListening() {
//   const addr = server.address();
//   const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
//   debug('Listening on ' + bind);
//   console.log(`==== The app is running on http://localhost:${port}`);
// }

const http = require('http');
const db = require('./config/mongoose'); // MongoDB configuration
const app = require('./config/express'); // Express configuration

// // Set up the port for the server
// const port = process.env.PORT || 3000;
// app.set('port', port);

// // Connect to MongoDB
// db();

// // Create HTTP server
// const server = http.createServer(app);

// // Start listening on the specified port
// server.listen(port, () => {
//   console.log(`==== The app is running on http://localhost:${port}`);
// });

// // Error handling for the server
// server.on('error', (error) => {
//   if (error.syscall !== 'listen') throw error;
  
//   const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges');
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use');
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// });

// // Log when the server is listening
// server.on('listening', () => {
//   const addr = server.address();
//   const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
//   console.log(`Listening on ${bind}`);
// });

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

db();
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);

  console.log('==== The app is running on http://localhost:' + port );
}