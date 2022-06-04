const isJSON = require('./utils/is-json');

class RequestAdapter {
  constructor () {

  }

  static async create(request) {
    this.body = await this.setBody(request);
    this.queries = await this.setQueries(request);

    return this;
  }

  static setBody(request) {
    let body = '';

    request.on('data', chunck => body += chunck);

    return new Promise((resolve, reject) => {
      request.on('end', () => {
        body = body && isJSON(body) ? JSON.parse(body) : body;
        
        resolve(body);
      });
    });
  }

  static setQueries(request) {
    let { url } = request;
    let queries = {};

    url = url.indexOf('?') ? url.split('?')[1] : [];

    if (url) {
      url = url.split('&');

      for (let query of url) {
        const [ key, value ] = query.split('=');

        queries = { ...queries, [key]: value };
      }
    }

    return Promise.resolve(queries);
  }
}

module.exports = RequestAdapter;