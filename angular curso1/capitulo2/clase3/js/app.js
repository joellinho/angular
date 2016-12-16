
(function(){
var app = angular.module('universidadApp', [ ]);


app.controller('listadoCtrl',['$scope', function($scope){
		$scope.listado = ["Fernando Herrera ","Melissa Flores","Juan carlos pineda"];

		$scope.listadoProfesores ={

			profesores : [
			{
				nombre: "Fernando Herrera",
				edad : 29,
				clase : "PEE"
			},
			{
				nombre: "Melissa Flores",
				edad : 35,
				clase : "ICE"
			},
			{
				nombre: "Juan Carlos",
				edad : 41,
				clase : "LEE"
			}



			]

			
		};

		$scope.listadoAlumnos ={
			Alumnos :[
				{
					idAlumno : 1,
					nombre :  "joe aguilar",
					aula : 4

				},
				{
					idAlumno : 2,
					nombre :  "joel martinez",
					aula : 3


				},
				{
					idAlumno : 3,
					nombre :  "joe enciso",
					aula : 3

				}
			]



		};
		
	


	}]);

		



})();