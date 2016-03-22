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

webApp.controller('projectsCtrl', [
	'$scope',
	'$log',
	function($scope, $log){
		$scope.projectList = [
			{
				name: "Interactive MATLAB Tutorial",
				description: "Web application, using MEAN stack."
			},
			{
				name: "Distance Vector Algorithm",
				description: "Router protocol, using routing tables to determine best path."
			},
			{
				name: "Custom Proxy",
				description: "Python based proxy that reads incoming and outgoing headers and modifies various fields."
			},
			{
				name: "Synchronizers",
				description: "Basic implementations of simple concurrency Synchronizers"
			},
			{
				name: "Post Script Interpreter",
				description: "Follows post-script grammar and executes programs using Python"
			}
		];
	}
]);

webApp.controller('aboutCtrl', [
	'$scope',
	'$log',
	function($scope, $log){
		
	}
]);