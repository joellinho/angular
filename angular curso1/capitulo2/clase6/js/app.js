
(function(){
var app = angular.module('universidadApp', [ ]);


app.controller('mainCtrl',['$scope','$http', function($scope,$http){
		
		$scope.profesores = {};
		$http.get('json/profesores.json').success(function(data){
			$scope.profesores = data.profesores;

		});	
		
	


	}]);

		



})();