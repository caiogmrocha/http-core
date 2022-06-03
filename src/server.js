const App = require('./app');

const app = new App();
const { API_HEADER } = App.DEFAULT_HEADERS;

app.setHeader(API_HEADER);

app.get('/users', (request, response) => {
  return response.end(JSON.stringify({
    message: 'Get All Users',
  }));
});

app.post('/users', (request, response) => {
  return response.end(JSON.stringify({
    message: 'Create Users',
  }));
});

app.listen(3333, () => console.log('Server is running at http://localhost:3333'));