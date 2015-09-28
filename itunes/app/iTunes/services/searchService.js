iTunes.factory('SearchServices', SearchServices);
SearchServices.$inject = ['$http'];

function SearchServices($http){
	var url_search = "https://itunes.apple.com/search?term=";
	var url_post = "https://cs-itunes.appspot.com/api/favorite/lady.barretto@cloudsherpas.com"
	var services = {}
	services.searchKeywords = function(keywords){
		return $http.get(url_search + keywords + '&element=music');
	}

	services.addToFavorites = function(data){
		return $http.post(url_post, data)
	}

	return services;
};