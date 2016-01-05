//chirpApp.js
var app = angular.module('cmApp', []);

app.controller('mainController', function($scope){
	$scope.data = { TP: null, FP: null, FN: null, TN: null };
    
    // convert subobjects of metrics object to array, later this array should be specified by front end check boxes
    $scope.metrics = Object.keys(metrics).map(function (key) { return metrics[key] });

	// update metrics on the fly
	$scope.update = function() {
		var TP = $scope.data.TP == null ? undefined : $scope.data.TP;
		var FP = $scope.data.FP == null ? undefined : $scope.data.FP;
		var FN = $scope.data.FN == null ? undefined : $scope.data.FN;
		var TN = $scope.data.TN == null ? undefined : $scope.data.TN;

        // update value for each metric
        $scope.metrics.forEach(function (metric) {
            //metric.update($scope.data);
            metric.update(TP, FP, FN, TN);
        })
	}
});
	
//REF: http://stackoverflow.com/questions/23861369/using-angularjs-how-to-perform-math-operations-on-textboxes-and-see-result-as-t