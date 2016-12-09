var app = angular.module("todoApp", []);
app.controller("appController", function($scope) {

	$scope.tasksList = [
		{'title':'Terminar o projeto',isDone:false},
		{'title':'Estudar prova de SI1',isDone:false},
		{'title':'Comecar o lab03 de SI1',isDone:false}
	];

	$scope.addTask = function(){
		$scope.tasksList.push({title:$scope.tasksInput, isDone:false});
		$scope.tasksInput = "";
	}

	$scope.clearDone = function(){

	}

	$scope.getNumDone = function(){
		var count = 0;
		angular.forEach($scope.tasksList, function(task){
			if (task.isDone) {
				count++;
			}
		});
		return count;
	}

	$scope.getProgressPercentage = function(){
		return ($scope.getNumDone()/$scope.tasksList.length)*100;
	}
});