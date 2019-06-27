var body = $('body');
var prld = $('#prld');


var JSCCommon = {
	prld: function() {
		$(window).on('load', function () { 
			prld.delay(150).fadeOut().find('i').fadeOut(function(){
				
			}); 
		});
	},
 

	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true, 
				},
				gallery: {
					enabled: true
				}
			});
		})
		// /modal галерея
	},
	// /magnificPopupCall
 
	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
	 
 

	fullPage: function () {
		if ($('div').is('#wrp')) {

			var swiper5 = new Swiper('.slider-about', {
		
				speed: 400, 
				spaceBetween: 0,  
				simulateTouch: false,
				shortSwipes: false,
				followFinger: false,
				followFinger: false,
				allowTouchMove: false,
				longSwipes: false,
			
			});
		
			$(".s-about__btn--js").click(  function(event){ 
				event.preventDefault(); 
				swiper5.slideNext();
			}) 
			$(".s-team__btn").click(function(){ 
				event.preventDefault(); 
				swiper5.slidePrev();
		
			})
		$('#wrp').fullpage({
			sectionSelector: 'section',
			navigation: true,
			// slidesNavigation: true,
			navigationPosition: 'left',
			responsiveWidth: 991.9,
			responsiveHeight: 600,
			scrollOverflow: true,
			responsiveSlides: false,
			// fixedElements: ".wrks__head",
			parallax: true,
			parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
			// lazyLoading: false,
			afterRender: function ( ) {
				// JSCCommon.LazyFunction();
				
			$(".lazy-bg-js").each(function () {

					$(this).parent().css('background-image', 'url(' + $(this).data('src') + ')').addClass('lazyloaded');
				})
 
			},

			onLeave: function (origin, destination, direction) {
				var leavingSection = this; 
				
				if (destination.index == 0) {
					
					$("body").removeClass('page-scrolled');
					$("body").removeClass('nav-scrolled');
					$("body").removeClass('nav-white');   
				}
					 

					if (destination.index == 1) {
						$("body").addClass('page-scrolled');
						$("body").addClass('nav-scrolled');
					} else {
						$("body").removeClass('page-scrolled');
						
					} 
				if (destination.index > 1 ) {
					$("body").removeClass('nav-scrolled'); 
					$("body").addClass('page-next');
				} 
				else {
					$("body").removeClass('page-next');
					
				}
				
				if(destination.index < 6) {
				}
				if(destination.index == 6) {
					$("body").addClass('page-scrolled');
					$("body").removeClass('page-next');
					$("body").removeClass('nav-scrolled');  
					
				}
				
				if(destination.index > 4) {
					
					$(".callDown").addClass('d-none');  
					$(".callTop").removeClass('d-none');  
					$("body").addClass('nav-white');  
					$("body").removeClass('page-next');
					// $("body").removeClass('page-next');
					$("body").addClass('last-screen');  
				
				}
				else{
					$(".callDown").removeClass('d-none');
					$(".callTop").addClass('d-none');    
				}
				if(destination.index < 4) {
					
					// $(".callDown").toggleClass('d-none');  
					// $(".callTop").toggleClass('d-none');  
					$("body").removeClass('last-screen');  
				}

				if(destination.index == 2  && $('.wrapper-slide .slider-about__slide:nth-child(2)').hasClass('swiper-slide-active') ) {
					swiper5.slidePrev('0',false);
					// console.log(back)
				}

			},

			anchors: ['mainHead', 'works', 's-about',   's-servises','s-logos','s-form'],
			menu: '#headNav',
		});
		function pageScrollTo(link, ancor ){
			$(link).click(function(event){
				event.preventDefault(); 
				fullpage_api.moveTo(ancor); 
				$.fn.fullpage.setAllowScrolling(true);
				var body = $('.call-opened')
				if(body.is('call-opened')){
					body.removeClass('call-opened');
					$.fn.fullpage.setAllowScrolling(true);
				}
			}) 
		}
				 
		pageScrollTo('.crls_mouse', 'works' ) 
		pageScrollTo('.btt-calc', 's-form')
		pageScrollTo('.btn-foot', 's-form') 
	} 
	},
	// /fullPage
	headSlider: function () {
		var time = 5000
		var swiper4 = new Swiper('.prm__slider--js', {
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '"><div class="pie_progress" role="progressbar" data-goal="100">\
				</div></span>';
				}
			},
			speed: 400,
			effect: 'fade',
			// fadeEffect: {
			// 	crossFade: true
			// },
			spaceBetween: 0,
			lazy: {
				loadPrevNext: true,
			},
			loop: true,
			// simulateTouch: false,
			// shortSwipes: false,
			// followFinger: false,
			// followFinger: false,
			// allowTouchMove: false,
			// longSwipes: false, 
			disableOnInteraction: false, 
			autoplay: {
				delay: time,
			},
			on: {
			 
				slideChange: function () {
					setTimeout(function () { 
						swiper4.autoplay.start();
							circle(); 
					}, 10);
				},

			}
		});

		for (var i = 1; i <= 6; ++i) {
			if ($("div").is("#px" + i)) {
				new Parallax(document.getElementById("px" + i));
			}
		} 

			function circle() {
				// $(".swiper-pagination-bullet").find("svg").remove();
				var bullet = $('.swiper-pagination-bullet-active .pie_progress')
				$('.swiper-pagination-bullet  .pie_progress').asPieProgress('reset');
				$('.swiper-pagination-bullet  .pie_progress').asPieProgress('go',0);
				bullet.asPieProgress({ 
					// min: 0,
					// max: 0,
					goal: 100,
					size: 10,
					speed: ((time+ 600) / 100), // speed of 1/100
					barcolor: '#ff7c22',
					barsize: '1',
					trackcolor: 'none',
					fillcolor: 'none',
					easing: 'linea', 
				 
				}); 
				// $('.swiper-pagination-bullet  .pie_progress').asPieProgress('go',0);
				
				bullet.asPieProgress('start');
				
				
				
			}
			
			$(document).on('click', ".swiper-pagination-bullet", function(){
				setTimeout(function () {
					// circle();  
					// swiper4.slideNext(400, false); 
					// $('.swiper-pagination-bullet  .pie_progress').asPieProgress('go',0); 
					// swiper4.autoplay.start();
			}, 1);
		})
	}
	// /headSlider
};
 
/***/

jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

	// вызов magnificPopupCall
	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');
 
 
	JSCCommon.fullPage();
	JSCCommon.prld();
  
 

	function hideMenu() {
		$('#menuOpen').removeClass('active').find('.txt').text('меню');
		body.removeClass('menu-opened');
		$('#crlsNav').removeClass("active");
		$('#crlsNav').removeClass("active");
	}
	body.click(function (e) {
		if ($(e.target).closest('#headNav a').length != 0) hideMenu();
	});
	$('#menuOpen').click(function (e) {
		e.preventDefault();
		if (body.hasClass('menu-opened')) {
			hideMenu();
			$.fn.fullpage.setAllowScrolling(true);
		} else {
			$(this).addClass('active').find('.txt').text('закрыть');
			body.addClass('menu-opened');
			$('#crlsNav').addClass('active');
			$.fn.fullpage.setAllowScrolling(false);
			
		}
	});
	$("#headNav a").click(function(){
		hideMenu()
		$.fn.fullpage.setAllowScrolling(true);
		
	})
	$(document).on('click', '.callOpen', function () {
		body.toggleClass('call-opened');
		$.fn.fullpage.setAllowScrolling(false);
	});
	
	$('.call__bg').click(function () {
		body.toggleClass('call-opened');
		$.fn.fullpage.setAllowScrolling(true);
		console.log(1);
	});

	
	$('.full-modal-open-js').click(function (even) {
		even.preventDefault();
		body.toggleClass('call-opened2');
		// $.fn.fullpage.setAllowScrolling(false);
		var imgSrc = this.dataset.img
		var img = '<img src="' + imgSrc + '">'
		document.querySelector('.project-block-modal__inner').style.backgroundImage = 'url('+ imgSrc+')'
		document.querySelector('.project-block-modal__inner').innerHTML = img
	});
	
	$('.callProjectClose').click(function () {
		body.removeClass('call-opened2');
		$.fn.fullpage.setAllowScrolling(true);
		// document.querySelector('.project-block-modal')
	});
	
	$('.callClose').click(function () {
		body.removeClass('call-opened');
		$.fn.fullpage.setAllowScrolling(true);
	});

	// pxs

	// wow init
	new WOW().init(); 
	// document.querySelector('.scrollable').onwheel = e => e.stopPropagation();
	// window.load

	// window.load-scroll-resize
	$(window).on('load  ', function () {
		// if ($(this).scrollTop() > 0) body.toggleClass('page-scrolled');
		JSCCommon.headSlider();
	});
// function teamsl() {

// 	$(".s-team").each(function(){
		
		
// 		var galleryThumbs = new Swiper($(this).find('.gallery-thumbs'), {
			
// 			slidesPerView: 'auto', 
// 			loopedSlides: 5, 
// 			spaceBetween: 20, 
// 			breakpoints: { 
// 				576: { 
// 					spaceBetween: 10
// 				} 
// 			}
// 		});
// 		var galleryTop = new Swiper($(this).find('.gallery-top'), {
// 			slidesPerView: 1,
// 			loop: true,
// 			loopedSlides: 5, //looped slides should be the same
			
// 			thumbs: {
// 				swiper: galleryThumbs,
// 			},
// 			speed: 400,
// 			effect: 'fade',
// 			spaceBetween: 0,
// 		});
		
// 	})
// }
	
	// init Masonry
	var $grid = $('.row--js').masonry({ 
		columnWidth: '.grid-item',
		itemSelector: '.grid-item',
		percentPosition: true
	}); 
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});
	
	setInterval(function(){
	$(".crls_mouse").toggleClass('animate')
}, 6000)


$(document).mouseup(function (e) {
	var container = $(".crls__form");
	if (container.has(e.target).length === 0) {
		console.log(1);
		$("body").removeClass("call-opened");
	}
});


});