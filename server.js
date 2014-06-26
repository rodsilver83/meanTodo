//server.js

var express 	= require('express');
var app 		= express();
var mongoose 	= require('mongoose');

// Conexión con la base de datos
mongoose.connect('mongodb://localhost:27017/angular-todos');

// Definición de modelos
require('./model/todo');

// Configuración
app.configure(function() {
	app.use(express.static(__dirname + '/public'));		// Localización de los ficheros estáticos
  app.use(express.static(__dirname + '/public/views'));		// Localización de los ficheros estáticos
  app.use(express.static(__dirname + '/bootstrap'));		// Localización de los ficheros estáticos
	app.use(express.logger('dev'));						// Muestra un log de todos los request en la consola
	app.use(express.bodyParser());						// Permite cambiar el HTML con el método POST
	app.use(express.methodOverride());					// Simula DELETE y PUT
});

// Definicion de rutas
require('./routes')(app);

// Escucha y corre el server
app.listen(8080, function() {
	console.log('App listening on port 8080');
});

