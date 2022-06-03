const http = require('http');

class App {
  static DEFAULT_HEADERS = {
    API_HEADER: {
      'Content-Type': 'application/json',
    },
  };

  CURRENT_HEADER = {};

  GET = {};
  POST = {};
  PUT = {};
  DELETE = {};

  constructor () {
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

  get(url, callback) {
    this.GET = {
      ...this.GET,
      [url]: callback,
    }
  }

  post(url, callback) {
    this.POST = {
      ...this.POST,
      [url]: callback,
    }
  }

  put(url, callback) {
    this.PUT = {
      ...this.PUT,
      [url]: callback,
    }
  }

  delete(url, callback) {
    this.DELETE = {
      ...this.DELETE,
      [url]: callback,
    }
  }
}

module.exports = App;