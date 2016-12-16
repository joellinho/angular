var app = angular.module('universidadApp', [ ]);


app.controller('profesorCtrl',  function($scope){
	$scope.profesor = profesorData;
	$scope.editando = {};
	$scope.campos=[];	
	$scope.elemento=0;
	$scope.mostrarNuevo=false;
	$scope.mostrarCaja = false;

		$scope.EditarProfesor = function(){
			angular.copy( $scope.profesor, $scope.editando );
			$scope.mostrarCaja=true;		

	};
 	$scope.GuardarCambios = function(){
			angular.copy( $scope.editando, $scope.profesor );
			$scope.mostrarCaja=false;
			

	};

		$scope.CancelarCambios = function(){
			$scope.editando = {};
			$scope.mostrarCaja=false;	
		
		};

		$scope.NuevoCampo = function(){

			$scope.elemento++;
			$scope.campos.push("ddd"+$scope.elemento);
		
			$scope.mostrarNuevo=true;	

		};
	});
		
		
		





var profesorData={
	nombre: "Juan Carlos Espineda",
	bio: "Saludos estudiante , mo nombre es Juan Carlos,encantado de conocerte soy un apasionado instructor",
	edad: 47,
	foto:"img/juancarlos.jpg"

}