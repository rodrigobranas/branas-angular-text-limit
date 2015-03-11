angular.module("textLimit", []);
angular.module("textLimit").directive("textLimit", function ($timeout, textLimitService) {
	return {
		require: "ngModel",
		link: function (scope, element, attrs, ctrl) {
			var execute = function () {
	        	scope.$apply(function () {
	            	ctrl.$setViewValue(textLimitService.limitText(ctrl.$modelValue, 10));
	                ctrl.$render();
	            });
	        };
	        element.bind('keyup', function () {
	            execute();
	        });
	         
	        $timeout(function () { 
	            execute();
	        }, 100);
		}
	};
});
angular.module("textLimit").factory("textLimitService", function () {
	var _limitText = function (text, size) {
		if (text) return text.substring(0,size);
	};

	return {
		limitText: _limitText
	}
});