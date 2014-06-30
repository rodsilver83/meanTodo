/**
 * Created by Rod on 6/24/14.
 */
// Definicion de controladores
var todoController = require('./controllers/todo');
var uploadController = require('./controllers/upload');

module.exports = function (app) {

// Rutas de nuestro API
  app.get('/api/todos', todoController.list);

  app.post('/api/todos', todoController.create);

  app.delete('/api/todos/:todo', todoController.delete);

  app.put('/api/todos/update/', todoController.update);

  app.get('/', function (req, res) {						// Carga una vista HTML simple donde irá nuesta Single App Page
    res.sendFile('index.html');				// Angular Manejará el Frontend
  });

  app.post('/app/upload/', uploadController.upload);

};