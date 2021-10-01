atm.controller('currentBal', ['$scope', function($scope){
	$scope.balance = 'P 10,000.00';
}]);

atm.controller('minusBal', ['$scope', function($scope){
	$scope.amount = 10000;
	$scope.subtract = function(amount, wd){
		$scope.txt = 'Your Remaining Balance is :';
		$scope.bal = parseInt(amount) - parseInt(wd);
	}
}]); 