const Router = require('../router');

const routes = new Router();

routes.get('/users', (request, response) => {
  return response.end(JSON.stringify({
    message: 'Get All Users',
  }));
});

routes.get('/users/search', (request, response) => {
  return response.end(JSON.stringify({
    message: 'Get All Users',
  }));
});

routes.post('/users', (request, response) => {
  const { body, queries } = request;

  return response.json({
    body
  });
});

module.exports = routes;