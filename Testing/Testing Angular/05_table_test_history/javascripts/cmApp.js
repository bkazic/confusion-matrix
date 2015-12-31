//chirpApp.js
var app = angular.module('cmApp', []);

app.controller('mainController', function($scope){
$scope.data = {TP: '', FP: '', FN: '', TN: '', created_at: ''};
	
	$scope.logs = [];
	$scope.post = function() {
		$scope.data.created_at = Date.now();
		$scope.logs.push($scope.data);
		$scope.data = {TP: '', FP: '', FN: '', TN: '', created_at: ''};
	}
});