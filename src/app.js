const Server = require('./server');
const routes = require('./routes');

const server = new Server();

server.setRoutes(routes);

server.listen(3333, () => console.log('Server is running at http://localhost:3333'));