class Router {
  GET = {};
  POST = {};
  PUT = {};
  DELETE = {};

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

module.exports = Router;