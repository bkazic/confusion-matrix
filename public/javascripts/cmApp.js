//chirpApp.js
var app = angular.module('cmApp', []);

app.controller('mainController', function($scope, $http){
	$scope.data = { TP: '', FP: '', FN: '', TN: '' };
	$scope.metrics = { };
	$scope.getTest = { };
	$scope.postTest = { };
	
	// update metrics on the fly
	$scope.update = function() {
		/*
		var TP = Number($scope.data.TP);
		var FP = Number($scope.data.FP);
		var FN = Number($scope.data.FN);
		var TN = Number($scope.data.TN);
		
		// Calculating metrics on the client side
		$scope.metrics.Sensitivity = TP/(TP + FN);
		$scope.metrics.Specificity =  TN/(FP + TN);
		*/
		
		// testing how data chagnes
		console.log($scope.data)
		
		// testing GET method on every data change
		$http.get('/calculate', {params: $scope.data}).success(function(data) {
			console.log("GET sucess: " + JSON.stringify(data))
				
			$scope.getTest.TP = data.TP;
			$scope.getTest.FP = data.FP;
			$scope.getTest.FN = data.FN;
			$scope.getTest.TN = data.TN;
		});
			
		// testing POST method on every data change
		$http.post('/calculate', $scope.data).success(function(data) {
			console.log("POST sucess: " + JSON.stringify(data))
			
			$scope.postTest.TP = data.TP;
			$scope.postTest.FP = data.FP;
			$scope.postTest.FN = data.FN;
			$scope.postTest.TN = data.TN;
		});
	}
	
	
	$scope.calculate = function() {
		console.log($scope.data);
		
		// I dodn't know what is more correct here, get or post?
		
		$http.get('/calculate', {params: $scope.data}).success(function(data) {
			console.log("GET sucess: " + JSON.stringify(data))
		});
			
		$http.post('/calculate', $scope.data).success(function(data) {
			console.log("POST sucess: " + JSON.stringify(data))
		});
	}
});
	
//REF: http://stackoverflow.com/questions/23861369/using-angularjs-how-to-perform-math-operations-on-textboxes-and-see-result-as-t