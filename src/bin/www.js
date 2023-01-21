#!/usr/bin/env node

// Module Dependencies

import debug from 'debug';
import http from 'http';
import app from '../app';

// Normalise a Port
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || '3000' );
app.set('port', port);

const server = http.createServer(app);


// Event listener for the HTTP server 'error' event

const onError = (error) => {
  if (error.syscall !== 'listen' ) {
    throw error;
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case 'EACCES':
      alert(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};


// Event listener for HTTP server 'listening' event

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
};

// Listen on provided port, on all interfaces
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
