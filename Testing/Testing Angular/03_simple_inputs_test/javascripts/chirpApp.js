//chirpApp.js
var app = angular.module('chirpApp', []);

app.controller('mainController', function($scope){
	$scope.post = {created_by: '', text: ''};
});