

//  lightbox.option({
// 	'resizeDuration': 200,
// 	'wrapAround': false
// });



var sync1 = $("#sync1");
var sync2 = $("#sync2");
var slidesPerPage = 4; //globaly define number of elements per page
var syncedSecondary = true;

sync1.owlCarousel({
  items : 1,
  slideSpeed : 2000,
  nav: false,
  autoplay: false,
  dots: true,
  loop: true,
  responsiveRefreshRate : 200,
}).on('changed.owl.carousel', syncPosition);

sync2
  .on('initialized.owl.carousel', function () {
	sync2.find(".owl-item").eq(0).addClass("current");
  })
  .owlCarousel({
  items : slidesPerPage,
  dots: false,
  nav: false,
  autoplay: false,
  margin:30,
  smartSpeed: 200,
  slideSpeed : 500,
  slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
  responsiveRefreshRate : 100
}).on('changed.owl.carousel', syncPosition2);

function syncPosition(el) {
  //if you set loop to false, you have to restore this next line
  //var current = el.item.index;
  
  //if you disable loop you have to comment this block
  var count = el.item.count-1;
  var current = Math.round(el.item.index - (el.item.count/2) - .5);
  
  if(current < 0) {
	current = count;
  }
  if(current > count) {
	current = 0;
  }
  
  //end block

  sync2
	.find(".owl-item")
	.removeClass("current")
	.eq(current)
	.addClass("current");
  var onscreen = sync2.find('.owl-item.active').length - 1;
  var start = sync2.find('.owl-item.active').first().index();
  var end = sync2.find('.owl-item.active').last().index();
  
  if (current > end) {
	sync2.data('owl.carousel').to(current, 100, true);
  }
  if (current < start) {
	sync2.data('owl.carousel').to(current - onscreen, 100, true);
  }
}

function syncPosition2(el) {
  if(syncedSecondary) {
	var number = el.item.index;
	sync1.data('owl.carousel').to(number, 100, true);
  }
}

sync2.on("click", ".owl-item", function(e){
  e.preventDefault();
  var number = $(this).index();
  sync1.data('owl.carousel').to(number, 300, true);
});
	
		
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
				navText: ["<span class='lnr lnr-chevron-left'></span>",
						"<span class='lnr lnr-chevron-right'></span>"
				]
		});

		// $(document).on('click', '.menu-icon', function () {
		// $('.mainMenu ').slideToggle();
		// });

		$(window).scroll(function () {
				var posH = $('header').height();
				if ($(this).scrollTop() > posH) {
						$('body').addClass("stickyH");
				} else {
						$('body').removeClass("stickyH");
				}
		});


		//Main wrapper subtract height from header and footer on resize
		$(window).on("load resize scroll", function (e) {
				var heightH = $('header').height();
				$('.bannerContent').css({
						'min-height': 'calc(100vh - ' + heightH + 'px)'
				});
		});

		$(window).on("load resize scroll", function (e) {
				var heightA = $('header').height();
				var footerA = $('footer').height();
				var totalH = heightA + footerA;
				$('main').css({
						'min-height': 'calc(100vh - ' + totalH + 'px)'
				});
		});

		// Mobile toggle
		$('.mobile-toggles').click(function () {
				$('body').toggleClass('open');
		});

		// Sidebar overlay
		$('.overlay').click(function () {
				$('body').removeClass('open');
		});
		$('.cartIcon .lnr-magnifier').click(function () {
				$(this).parent('a').next().slideToggle();
		});

		$('#chooseFile').bind('change', function () {
				var filename = $("#chooseFile").val();
				if (/^\s*$/.test(filename)) {
						$(".file-upload").removeClass('active');
						$("#noFile").text("No file chosen...");
				} else {
						$(".file-upload").addClass('active');
						$("#noFile").text(filename.replace("C:\\fakepath\\", ""));
				}
		});

		/*==============FAQ==============*/
		$('.collapse').on('shown.bs.collapse', function () {
				$(this).parent().find(".lnr-chevron-down").removeClass("lnr-chevron-down").addClass(
						"lnr-chevron-up");
		}).on('hidden.bs.collapse', function () {
				$(this).parent().find(".lnr-chevron-up").removeClass("lnr-chevron-up").addClass(
						"lnr-chevron-down");
		});

		// truncate 300
		var showChar = 300;
		var ellipsestext = "....";

		$(".truncate300").each(function () {
				var content = $(this).html();
				if (content.length > showChar) {
						var c = content.substr(0, showChar);
						var h = content;
						var html = c + ellipsestext;

						$(this).html(html);
				}
		});

// truncate 200
var showChar = 200;
var ellipsestext = "....";

$(".truncate200").each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
				var c = content.substr(0, showChar);
				var h = content;
				var html = c + ellipsestext;

				$(this).html(html);
		}
});

// truncate 400
var showChar = 350;
var ellipsestext = "....";

$(".truncate400").each(function () {
		var content = $(this).html();
		if (content.length > showChar) {
				var c = content.substr(0, showChar);
				var h = content;
				var html = c + ellipsestext;

				$(this).html(html);
		}
});



// $('#calendar').fullCalendar({
// 	header: {
// 		left: 'prev,next today',
// 		center: 'title',
// 		right: 'month,basicWeek,basicDay'
// 	},
// 	defaultDate: '2018-03-12',
// 	navLinks: true, 
// 	editable: true,
// 	eventLimit: true, 
// 	events: [
// 		{
// 			title: 'All Day Event',
// 			start: '2018-11-01'
// 		},
// 		{
// 			title: 'Long Event',
// 			start: '2018-03-07',
// 			end: '2018-03-10'
// 		},
// 		{
// 			id: 999,
// 			title: 'Repeating Event',
// 			start: '2018-03-09T16:00:00'
// 		},
// 		{
// 			id: 999,
// 			title: 'Repeating Event',
// 			start: '2018-03-16T16:00:00'
// 		},
// 		{
// 			title: 'Conference',
// 			start: '2018-03-11',
// 			end: '2018-03-13'
// 		},
// 		{
// 			title: 'Meeting',
// 			start: '2018-03-12T10:30:00',
// 			end: '2018-03-12T12:30:00'
// 		},
// 		{
// 			title: 'Lunch',
// 			start: '2018-03-12T12:00:00'
// 		},
// 		{
// 			title: 'Meeting',
// 			start: '2018-03-12T14:30:00'
// 		},
// 		{
// 			title: 'Happy Hour',
// 			start: '2018-03-12T17:30:00'
// 		},
// 		{
// 			title: 'Dinner',
// 			start: '2018-03-12T20:00:00'
// 		},
// 		{
// 			title: 'Birthday Party',
// 			start: '2018-03-13T07:00:00'
// 		},
// 		{
// 			title: 'Click for Google',
// 			url: 'http://google.com/',
// 			start: '2018-03-28'
// 		}
// 	]
// });



	