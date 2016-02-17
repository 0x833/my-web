webApp.controller('introController', [
	'$scope',
	'$log',
	function($scope, $log){
		$scope.showVideo = false;

		$scope.displayVideo = function(){
			$scope.showVideo = !$scope.showVideo;
		};
	}
]);

webApp.controller('aboutController', [
	'$scope',
	'$log',
	function($scope, $log){
		$('.carousel').carousel({
		  interval: 6000,
		  pause: "false"
		});
		var $item = $('.carousel .item');
		var $wHeight = $(window).height();

		$item.height($wHeight); 
		$item.addClass('full-screen');

		$('.carousel img').each(function() {
		  var $src = $(this).attr('src');
		  var $color = $(this).attr('data-color');
		  $(this).parent().css({
		    'background-image' : 'url(' + $src + ')',
		    'background-color' : $color
		  });
		  $(this).remove();
		});

		$(window).on('resize', function (){
		  $wHeight = $(window).height();
		  $item.height($wHeight);
		});
	}
]);