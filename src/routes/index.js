const Router = require('../router');

const routes = new Router();

routes.get('/users', (request, response) => {
  return response.end(JSON.stringify({
    message: 'Get All Users',
  }));
});

routes.post('/users', (request, response) => {
  return response.end(JSON.stringify({
    message: 'Create Users',
  }));
});

module.exports = routes;