const http = require('http');
const Router = require('./router');
const RequestAdapter = require('./request-adapter');

class Server extends Router {
  static DEFAULT_HEADERS = {
    API_HEADER: {
      'Content-Type': 'application/json',
    },
  };

  CURRENT_HEADER = {};

  constructor () {
    super();
    
    this.server = http.createServer(async (request, response) => {
      let { url, method } = request;

      // Remove query params from url
      if (url.indexOf('?')) {
        url = url.split('?')[0];
      }

      response.writeHead(200, this.CURRENT_HEADER);

      const chosenRoute = this[method][url];

      const requestAdapter = await RequestAdapter.create(request);

      return chosenRoute(requestAdapter, response);
    });
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }

  setHeader(headerConfig) {
    this.CURRENT_HEADER = headerConfig;
  }

  setRoutes(router) {
    this.GET = router.GET;
    this.POST = router.POST;
    this.PUT = router.PUT;
    this.DELETE = router.DELETE;
  }
}

module.exports = Server;