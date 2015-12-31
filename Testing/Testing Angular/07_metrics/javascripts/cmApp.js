//chirpApp.js
var app = angular.module('cmApp', []);

app.controller('mainController', function($scope){
	$scope.data = { TP: '', FP: '', FN: '', TN: '' };
	$scope.metrics = { };
	
	// update metrics on the fly
	$scope.update = function() {
		var TP = Number($scope.data.TP);
		var FP = Number($scope.data.FP);
		var FN = Number($scope.data.FN);
		var TN = Number($scope.data.TN);
			
		$scope.metrics.Sensitivity = TP/(TP + FN);
		$scope.metrics.Specificity =  TN/(FP + TN);
	}
});
	
//REF: http://stackoverflow.com/questions/23861369/using-angularjs-how-to-perform-math-operations-on-textboxes-and-see-result-as-t