const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Porta dinâmica do Render
const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Middleware CORS (IMPORTANTE)
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log(`🚀 JSON Server rodando na porta ${PORT}`);
});

