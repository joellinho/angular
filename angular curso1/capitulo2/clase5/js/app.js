
(function(){
var app = angular.module('universidadApp', [ ]);


app.controller('listadoCtrl',['$scope', function($scope){
			$scope.paisSeleccionado ="PER";
		
			$scope.paises = [
			{
			 id:"CRI",
			 nombre : "COSTA RICA"
			},
			{
			 id:"HRV",
			 nombre : "CROACIA"
			},
			{
			 id:"CUB",
			 nombre : "CUBA"
			},
			{
			 id:"ECU",
			 nombre : "ECUADOR"
			},
			{
			 id:"MEX",
			 nombre : "MEXICO"
			},
			{
			 id:"URU",
			 nombre : "URUGUAY"
			},
			{
			 id:"PAR",
			 nombre : "PARAGUAY"
			},
			{
			 id :"CHI",
			 nombre  : "CHILE"
			},
			{
			 id :"PER",
			 nombre  : "PERU"
			},
			{
			 id :"USA",
			 nombre  : "ESTADOS UNIDOS"
			},
			{
			 id :"VEN",
			 nombre  : "VENEZUELA"
			}



			];
		
	


	}]);

		



})();