const http = require('http');
const Router = require('./router');

class Server extends Router {
  static DEFAULT_HEADERS = {
    API_HEADER: {
      'Content-Type': 'application/json',
    },
  };

  CURRENT_HEADER = {};

  constructor () {
    super();
    
    this.server = http.createServer((request, response) => {
      const { url, method } = request;

      response.writeHead(200, this.CURRENT_HEADER);

      const chosenRoute = this[method][url];

      return chosenRoute(request, response);
    });
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }

  setHeader(headerConfig) {
    this.CURRENT_HEADER = headerConfig;
  }

  setRoutes(router = null) {
    this.GET = router.GET;
    this.POST = router.POST;
    this.PUT = router.PUT;
    this.DELETE = router.DELETE;
  }
}

module.exports = Server;