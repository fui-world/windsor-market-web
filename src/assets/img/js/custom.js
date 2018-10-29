$(document).ready(function () {
	/*===========owlcarousel=================*/
	$('#discoverWindstores').owlCarousel({
		loop: true,
		margin: 5,
		nav: true,
		// autoplay:true,
		// autoplayTimeout:2000,
		// autoplayHoverPause:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		},
		navText: ["<span class='lnr lnr-chevron-left'></span>", "<span class='lnr lnr-chevron-right'></span>"]
	})
	$(document).on('click', '.menu-icon', function () {
		$('.mainMenu ').slideToggle();
	})
})