var app = angular.module("todoApp", []);
app.controller("appController", function($scope) {
	$scope.tasks = [
		{'title':'Terminar o projeto','done':false},
		{'title':'Estudar prova de SI1','done':false},
		{'title':'Comecar o lab03 de SI1','done':false}
	];

	$scope.addTask = function(){

	}

	$scope.clearDone = function(){

	}
});