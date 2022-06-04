const http = require('http');
const Router = require('./router');
const RequestAdapter = require('./request-adapter');
const ResponseAdapter = require('./response-adapter');

class Server extends Router {
  constructor () {
    super();
    
    this.server = http.createServer(async (request, response) => {
      let { url, method } = request;

      // Remove query params from url
      if (url.indexOf('?')) {
        url = url.split('?')[0];
      }

      const chosenRoute = this[method][url];

      const requestAdapter = await RequestAdapter.create(request);
      const responseAdapter = await ResponseAdapter.create(response);

      return chosenRoute(requestAdapter, responseAdapter);
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