(function () {
  var angularTodo = angular.module('angularTodo', []);

  angularTodo.controller('mainController',['$scope','$http',function($scope,$http) {
    this.formData = {};
    $scope.todos = [];

    // Cuando se cargue la página, pide del API todos los TODOs
    $http.get('/api/todos')
        .success(function (data) {
          $scope.todos = data;
        })
        .error(function (data) {
          console.log('Error: ' + data);
        });

    // Cuando se añade un nuevo TODO, manda el texto a la API
    this.createTodo = function () {
      $http.post('/api/todos', this.formData)
          .success(function (data) {
            this.formData = {};
            this.formData.colors = [];
            $scope.todos = data;
          })
          .error(function (data) {
            console.log('Error:' + data);
          });
    };

    // Borra un TODO despues de checkearlo como acabado
    this.deleteTodo = function (id) {
      $http.delete('/api/todos/' + id)
          .success(function (data) {
            $scope.todos = data;
          })
          .error(function (data) {
            console.log('Error:' + data);
          });
    };

    this.loadEditTodo = function (todo) {
      $scope.todo = todo;

      addFileEvent(this);
    };

    this.editTodo = function (todo) {
      $http.put('/api/todos/update/', todo)
          .success(function (data) {
            //console.log(data);
          })
          .error(function (data) {
            console.log('Error:' + data);
          });
      $('#myModal').modal('hide')
    };

    //Agregar Color
    this.addColor = function (todo) {
      todo.colors.push({ color: null, image: null});

      addFileEvent();
    };

    function addFileEvent() {
      $("#myModal").off("click", ".fileupload");
      $("#myModal").on("click", ".fileupload", function () {
        $('.fileupload').fileupload({
          dataType: 'json',
          done: function (e, data) {
            $("#img_" + $(this).data('id')).attr('src', data.result);
            $scope.todo.colors[$(this).data('index')].image = data.result;
            //$("#image_"+$(this).data('id')).val(data.result);
            //$("#image_"+$(this).data('id')).change();
          }
        });
      });
    }

    this.changeFile = function () {
      console.log("CHANGEFILE");
    }
  }]);
})();


