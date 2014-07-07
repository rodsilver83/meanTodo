/**
 * Created by Rod on 6/24/14.
 */
var mongoose 	= require('mongoose');
var Todo = mongoose.model('todo');

exports.list = function(req, res) {				// GET de todos los TODOs
  Todo.find(function(err, todos) {
    if(err) {
      res.send(err);
    }
    res.json(todos);
  });
};

exports.create = function(req, res) {				// POST que crea un TODO y devuelve todos tras la creación
  Todo.create({
    text: req.body.text,
    price: req.body.price,
    colors: req.body.colors,
    done: false
  }, function(err, todo){
    if(err) {
      res.send(err);
    }

    Todo.find(function(err, todos) {
      if(err){
        res.send(err);
      }
      res.json(todos);
    });
  });
};

exports.delete = function(req, res) {		// DELETE un TODO específico y devuelve todos tras borrarlo.
  Todo.remove({
    _id: req.params.todo
  }, function(err, todo) {
    if(err){
      res.send(err);
    }

    Todo.find(function(err, todos) {
      if(err){
        res.send(err);
      }
      res.json(todos);
    });

  })
};

exports.update = function(req, res) {		// DELETE un TODO específico y devuelve todos tras borrarlo.
  var query = { _id: req.body._id };
  Todo.update(query, { text: req.body.text, price: req.body.price, colors: req.body.colors }, function (err, todo) {
    if(err){
      res.send(err);
    }

    Todo.find(function(err, todos) {
      if(err){
        res.send(err);
      }
      res.json(todos);
    });
  });
};