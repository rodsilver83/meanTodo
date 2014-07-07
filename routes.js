/**
 * Created by Rod on 6/24/14.
 */
// Definicion de controladores
var todoController = require('./controllers/todo');
var uploadController = require('./controllers/upload');
var fs = require('fs');

module.exports = function (app) {

// Rutas de nuestro API
  app.get('/api/todos', todoController.list);

  app.post('/api/todos', todoController.create);

  app.delete('/api/todos/:todo', todoController.delete);

  app.put('/api/todos/update/', todoController.update);

  app.get('/', function (req, res) {						// Carga una vista HTML simple donde irá nuesta Single App Page
    res.sendFile('index.html');				// Angular Manejará el Frontend
  });

  app.get('/flores', function (req, res) {						// Carga una vista HTML simple donde irá nuesta Single App Page
    fs.readFile(__dirname + '/public/views/flores.html',function(err,data){
      res.end(data);
    });
  });

  app.post('/app/upload/', uploadController.upload);

};