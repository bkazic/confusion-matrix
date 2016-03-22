//chirpApp.js
var app = angular.module('cmApp', []);

//ref: http://stackoverflow.com/questions/23861369/using-angularjs-how-to-perform-math-operations-on-textboxes-and-see-result-as-t
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

    // set example data and calculate metrics
	$scope.setExample = function () {
	    $scope.data = { TP: 1, FP: 2, FN: 3, TN: 4 };

        // calculate metrics
	    $scope.update();
	}
});

//hack to use jQuery page-scroll inside ng-repeat 
//ref: http://stackoverflow.com/questions/30685321/jquery-functions-not-working-with-ng-repeat
//ref: http://stackoverflow.com/questions/20482047/jquery-not-working-with-ng-repeat-results
app.directive('tableScroll', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        }
    }
})

//// example how to add tooltip in ng-repeat
//app.directive('tooltip', function () {
//    return {
//        restrict: 'A',
//        link: function (scope, element, attrs) {
//            $(element).hover(function () {
//                // on mouseenter
//                $(element).tooltip('show');
//            }, function () {
//                // on mouseleave
//                $(element).tooltip('hide');
//            });
//        }
//    };
//});