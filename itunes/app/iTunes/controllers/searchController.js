iTunes.controller('SearchCtrl', SearchCtrl);
SearchCtrl.$inject = ['$scope', '$timeout', 'SearchServices', 'FaveServices'];

function SearchCtrl($scope, $timeout, SearchServices, FaveServices){
	$scope.search = function(keywords){
		SearchServices.searchKeywords(keywords)
			.success(function(data){
				$scope.searchItems = data;
			})
	};
	$scope.getFavoriteItems = function(){
		FaveServices.listAllFavorites()
			.success(function(data){
				//$scope.favoriteItems = data;
			});
	};
	$scope.addToFave = function(track){
		SearchServices.addToFavorites(track)
			.success(function(data){
				$scope.getFavoriteItems();
			})
	};
};