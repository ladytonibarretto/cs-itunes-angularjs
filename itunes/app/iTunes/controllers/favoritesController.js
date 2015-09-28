iTunes.controller('FaveCtrl', FaveCtrl);
FaveCtrl.$inject = ['$scope', 'FaveServices', '$route'];

function FaveCtrl($scope, FaveServices, route){
	$scope.removeFromFave = function(record_id){
		FaveServices.removeFromFavorites(record_id)
			.success(function(data){
				$scope.getFavoriteItems();
			})
	};
	$scope.getFavoriteItems = function(){
		FaveServices.listAllFavorites()
			.success(function(data){
				$scope.favoriteItems = data;
			});
	}

	$scope.getFavoriteItems();
};