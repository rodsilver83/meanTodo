
var angularTodo = angular.module('angularTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};
  $scope.formData.colors = [];

	// Cuando se cargue la página, pide del API todos los TODOs
	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
			console.log(data)
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// Cuando se añade un nuevo TODO, manda el texto a la API
	$scope.createTodo = function(){
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error:' + data);
			});
	};

	// Borra un TODO despues de checkearlo como acabado
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error:' + data);
			});
	};

  $scope.loadEditTodo = function(todo) {
      $scope.todo = todo;
  };

  $scope.editTodo = function(todo) {
    $http.put('/api/todos/update/' + todo._id +'/' + todo.text)
        .success(function(data) {
          console.log(data);
        })
        .error(function(data) {
          console.log('Error:' + data);
        });
    $('#myModal').modal('hide')
  };

  //Agregar Color
  $scope.addColor = function(){
    $scope.formData.colors.push({ color: null, image: null});
    console.log($scope.formData);
  };
}