var app = angular.module('universidadApp', [ ]);


app.controller('profesorCtrl',  function($scope){
	$scope.profesor = profesorData;
	$scope.editando = {};

		$scope.EditarProfesor = function(){
			angular.copy( $scope.profesor, $scope.editando );

		

	};
 $scope.GuardarCambios = function(){
			angular.copy( $scope.editando, $scope.profesor );

		

	};

		$scope.CancelarCambios = function(){
			$scope.editando = {};

		
		};
	});

		





var profesorData={
	nombre: "Juan Carlos Espineda",
	bio: "Saludos estudiante , mo nombre es Juan Carlos,encantado de conocerte soy un apasionado instructor",
	edad: 47,
	foto:"img/juancarlos.jpg",
	materia: "matematica"

}