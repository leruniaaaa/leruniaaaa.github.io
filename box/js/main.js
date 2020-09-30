$(function() {
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	let how = $("#how");
	let howTop = how.offset().top;

	$(window).bind('scroll', function() {
		let windowTop = $(this).scrollTop();
		if (windowTop > howTop) {
			$('.contact__map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A690b11f8ab72eba93d13c1fb4e2766344a8002a381690ae291d41785755b60f4&amp;width=400&amp;height=300&amp;lang=ru_RU&amp;scroll=true"></script>')
			$(window).unbind('scroll');
		}
	});


	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);
	});	

	function checkScroll() {
		if( scrollPos >= introH ) {
			header.addClass("fixed");	
		} else {
			header.removeClass("fixed");
		}
	}

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
		
		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset
		}, 700);
	});



	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	});
});