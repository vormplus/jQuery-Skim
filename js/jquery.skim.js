(function($) {
	$.fn.skim = function() {
		return this.each(function() {
	
			var container = $(this);
			var imgHeight  = container.find("li").find("img").height();
			var imgWidth   = container.find("li").find("img").width();
			var numImgs    = container.find("li").size();
			var zoneWidth  = imgWidth / numImgs;

			container.css("overflow", "hidden");
			container.css("width", imgWidth);

			container.find("ul").css("float", "left");
			container.find("ul").css("width", imgWidth);
			container.find("ul").css("height", imgHeight);

			container.find("ul li").css("float", "left");
			container.find("ul li").css("display", "none");
			container.find("ul li:first").css("display", "block");
			container.find("ul li:first").css("float", "left");

			container.find("ul").mousemove(function(e) {
				var offset = container.offset();
				x = e.pageX - offset.left;
				var currentZone = Math.floor(x / zoneWidth);
				$(this).find("li").css("display", "none");
				$(this).find("li:eq(" + currentZone + ")").css("display", "block");
			});
		});
	}
})(jQuery);