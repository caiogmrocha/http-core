const http = require('http');

http
  .createServer((request, response) => response.end('Hello World'))
  .listen(3333, () => console.log('Server is running at http://localhost:3333'));