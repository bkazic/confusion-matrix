//chirpApp.js
var app = angular.module('cmApp', []);

app.controller('mainController', function($scope){
	$scope.data = {TP: '', FP: '', FN: '', TN: ''};
});