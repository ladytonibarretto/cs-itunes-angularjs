iTunes.directive('playlist', playlist);
playlist.$inject=['ngAudio'];

function playlist(ngAudio){
	return {
		scope: {
			track:'='
		}, 
		restrict: 'E', 
		templateUrl: 'iTunes/playlist.html',
		link: function(scope, element, attrs) {
			scope.audio = ngAudio.load(scope.track.previewUrl);
			scope.play = function(){
				scope.audio.play();
			};

			scope.stop = function(){
				scope.audio.stop();
			};

			scope.pause = function(){
				scope.audio.pause();
			};
		}
	};
};