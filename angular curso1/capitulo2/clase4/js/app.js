
(function(){
var app = angular.module('universidadApp', [ ]);


app.controller('listadoCtrl',['$scope', function($scope){
		
		
			$scope.personas = [
			{
				"id": 0,
				"sexo" : "mujer",
				"nombre" : "maria",
				"avatar" : "maria.jpg",
				"telefono" : "(51) 97756864",
				"celular" : "998754852"
			},
			{
				"id": 1,
				"sexo" : "mujer",
				"nombre" : "vanessa",
				"avatar" : "vanessa.jpg",
				"telefono" : "(51) 123456789",
				"celular" : "987654321"
			},
			{
				"id": 2,
				"sexo" : "hombre",
				"nombre" : "juan carlos",
				"avatar" : "juancarlos.jpg",
				"telefono" : "(51) 97756864",
				"celular" : "998754852"
			}
			,
			{
				"id": 3,
				"sexo" : "mujer",
				"nombre" : "gabriela",
				"avatar" : "gabriela.jpg",
				"telefono" : "(51) 97756864",
				"celular" :"998754852"
			},
			{
				"id": 4,
				"sexo" : "hombre",
				"nombre" : "joaquin",
				"avatar" : "joaquin.jpg",
				"telefono" : "(51) 97756864",
				"celular" : "988754852"
			}



			];
		
	


	}]);

		



})();