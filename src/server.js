const App = require('./app');
const routes = require('./routes');

const app = new App();
const { API_HEADER } = App.DEFAULT_HEADERS;

app.setHeader(API_HEADER);
app.setRoutes(routes);

app.listen(3333, () => console.log('Server is running at http://localhost:3333'));