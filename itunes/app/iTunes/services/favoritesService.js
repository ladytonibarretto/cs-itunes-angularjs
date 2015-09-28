iTunes.factory('FaveServices', FaveServices);
FaveServices.$inject = ['$http'];

function FaveServices($http){
	var url = "https://cs-itunes.appspot.com/api/favorite/lady.barretto@cloudsherpas.com"
	var services = {}
	services.listAllFavorites = function(){
		return $http.get(url);
	}

	services.removeFromFavorites = function(record_id){
		return $http.delete(url + '/' + record_id);
	}

	return services;
};