const ServerError = require('./errors/server-error');
const isJSON = require('./utils/is-json');

class ResponseAdapter {
  static DEFAULT_HEADERS = {
    API_HEADER: {
      'Content-Type': 'application/json',
    },
  };

  constructor () {

  }

  static async create(response) {
    this.response = response;

    return this;
  }

  static send(anything) {
    return this.response.end(anything);
  }

  static json(object, statusCode = 200) {
    
    if (!(typeof object === 'object')) {
      this.response.writeHead(statusCode, this.DEFAULT_HEADERS.API_HEADER);
      
      return this.response.end(JSON.stringify(object));
    }
    
    this.response.writeHead(500, this.DEFAULT_HEADERS.API_HEADER);

    return this.response.end(JSON.stringify(new ServerError()));
  }
}

module.exports = ResponseAdapter;