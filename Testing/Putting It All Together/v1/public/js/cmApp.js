//chirpApp.js
var app = angular.module('cmApp', []);

app.controller('mainController', function($scope){
	$scope.data = { TP: '', FP: '', FN: '', TN: '' };
    $scope.old = {};

    // this array should be specified by front end check boxes
    //$scope.test = [
    //    { name: "Sensitivity", value: undefined, update: function (data) { this.value = Number(data.TP) / (Number(data.TP) + Number(data.FN)) } }, 
    //    { name: "Specificity", value: undefined, update: function (data) { this.value = data.TN / (data.FP + data.TN) } }
    //];
    // metrics recieved from metrics.js
    $scope.metrics = [metrics.Sensitivity, metrics.Specificity];

	// update metrics on the fly
	$scope.update = function() {
		var TP = Number($scope.data.TP);
		var FP = Number($scope.data.FP);
		var FN = Number($scope.data.FN);
		var TN = Number($scope.data.TN);

		$scope.old.Sensitivity = TP/(TP + FN);
        $scope.old.Specificity = TN / (FP + TN);

        // update value for each metric
        $scope.metrics.forEach(function (metric) {
            //metric.update($scope.data);
            metric.update(TP, FP, FN, TN);
        })
	}
});
	
//REF: http://stackoverflow.com/questions/23861369/using-angularjs-how-to-perform-math-operations-on-textboxes-and-see-result-as-t