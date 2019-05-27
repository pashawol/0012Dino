var body = $('body');
var prld = $('#prld');

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJX
	LazyFunction: function () {
		// Для лэзи загрузки 

		document.addEventListener("DOMContentLoaded", function () {
			let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
			let active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top - lazyImage.parentElement.clientHeight * 2) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.parentElement.clientHeight * 2) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});


		// лэзи 
		document.addEventListener("DOMContentLoaded", function () {
			let lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
			let active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top - lazyImage.parentElement.clientHeight) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.parentElement.clientHeight) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});

	},
	// /LazyFunction


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
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }
				},
				gallery: {
					enabled: true
				}
			});
		})
		// /modal галерея
	},
	// /magnificPopupCall
	mobileMenu: function () {
		// закрыть/открыть мобильное меню
		var toggMnu = $(".toggle-menu-mobile--js").click(function () {

			$(".toggle-menu-mobile--js").toggleClass("on");
			// $("body").toggleClass("fixed");
			$(".menu-mobile--js").toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		$('.menu-mobile--js ul li a').on('click', function () {
			$(".menu-mobile--js .toggle-mnu").click();
		});
		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				$(".toggle-menu-mobile--js").removeClass("on");
				// $("body").toggleClass("fixed");
				$(".menu-mobile--js").removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});
		// закрыть меню при горизонтальном свайпе
		$('.menu-mobile--js.active').swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == 'left') {
					$(".toggle-menu-mobile--js").removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
				if (direction == 'right') {
					$(".toggle-menu-mobile--js").removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
			},
			triggerOnTouchEnd: false,
		});
	},
	// /	mobileMenu

	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
		// /табы  

 


 
  
	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	},
	stickyFunc: function () {
		$(".wrks__head").stick_in_parent({
			// offset_top: $(".top-nav").height() + 30,
			// inner_scrolling: true,
			parent: '.wrks',
			// recalc_every: 1,
			//  recalc_every: true,
		});
	},

	fullPage: function () {
		if ($('div').is('#wrp')) {

	
		$('#wrp').fullpage({
			sectionSelector: 'section',
			navigation: true,
			// slidesNavigation: true,
			navigationPosition: 'left',
			responsiveWidth: 991.9,
			responsiveHeight: 600,
			scrollOverflow: true,
			fixedElements: ".wrks__head",
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
					$("body").removeClass('nav-white');   
				} 
				else {
					$("body").removeClass('page-next');
					
				}
				
				if(destination.index == 6) {
					$("body").addClass('page-scrolled');
					$("body").removeClass('page-next');
					$("body").removeClass('nav-scrolled');  
					$("body").addClass('nav-white');  
					
				}
				// if(origin.index == 2  && $('[data-anchor="slideTeam"]').hasClass('active') ) {
				// 	fullpage_api.moveSlideLeft();
				// }

			},

			anchors: ['mainHead', 'works', 's-about', 's-team', 's-servises','s-logos','s-form'],
			menu: '#headNav',
		});
		function pageScrollTo(link, ancor ){
			document.querySelector(link).addEventListener('click', function(event){
				event.preventDefault(); 
				fullpage_api.moveTo(ancor); 
				$.fn.fullpage.setAllowScrolling(true);
				var body = document.querySelector('.call-opened')
				if(body.classList.contains('call-opened')){
					body.classList.remove('call-opened');
					$.fn.fullpage.setAllowScrolling(true);
				}
			}) 
		}
				 
		pageScrollTo('.crls_mouse', 'works' )
		pageScrollTo('.s-about__btn--js', 's-team' )
		pageScrollTo('.s-team__btn', 's-about')
		pageScrollTo('.btt-calc', 's-form')
		pageScrollTo('.btn-foot', 's-form')
	}
		 
	 

	},
	// /fullPage
	headSlider: function () {
		var swiper4 = new Swiper('.prm__slider--js', {
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			speed: 400,
			effect: 'fade',
			spaceBetween: 0,
			lazy: {
				loadPrevNext: true,
			},
			loop: true,
			simulateTouch: false,
			shortSwipes: false,
			followFinger: false,
			followFinger: false,
			allowTouchMove: false,
			longSwipes: false,
			on: {
				reachEnd: function () {
					/* do something */

				},

				slideChange: function () {
					setTimeout(function () {
						circle();

					}, 100);
				},

			}
		});

		for (var i = 1; i <= 6; ++i) {
			if ($("div").is("#px" + i)) {
				new Parallax(document.getElementById("px" + i));
			}
		}
		$(window).on('load', function () {
			circle();
		});

		function circle() {
			$(".swiper-pagination-bullet").find("svg").remove();
			$(".swiper-pagination-bullet-active ").circliful({
				animation: 1,
				animationStep: 1,
				foregroundBorderWidth: 15,
				backgroundBorderWidth: 15,
				percent: 100,
				backgroundColor: "none",
				foregroundColor: '#ff7c22',
				// percentages: [10, 20, 30]
				// halfCircle: 1,
				multiPercentage: 1,
			}, function () {
				setTimeout(function () {
					// circle();  
					swiper4.slideNext(400, false);

				}, 100);
			});
		}

	}
	// /headSlider
};

JSCCommon.LazyFunction();
/***/

jQuery(document).ready(function ($) {

	// для свг
	svg4everybody({});
	// Custom JS

	// вызов magnificPopupCall
	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();
 
	JSCCommon.fullPage();

	// var $grid = 	$('.arn-msnr').masonry({
	// 	itemSelector: '.cl',
	// 	columnWidth: '.cl-sizer',
	// 	percentPosition: true,

	// });
	// $grid.on( 'layoutComplete', JSCCommon.fullPage() ); 


	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//


		// скрывает моб меню

		var topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
	}

	if (window.matchMedia("(min-width: 992px)").matches) {

		$(".toggle-menu-mobile--js").removeClass("on");
		// $("body").removeClass("fixed");
		$(".menu-mobile--js").removeClass("active");
		$("body").removeClass("fixed");
	}


	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();



	// листалка по стр
	// $(" .top-nav a").click(function () {
	//        var elementClick = $(this).attr("href");
	//        var destination = $(elementClick).offset().top;

	//            $('html, body').animate({ scrollTop: destination }, 1100);

	//        return false;
	//    });



	// $('.s-gal__slider,' +
	// 		' .s-project__slider--js ,' +
	// 		' .slider-for ,' +
	// 		' .slider-for2 ')
	// 	.on('lazyLoaded', function (event, slick, image, imageSource) {
	// 		image.parent().css('background-image', 'url(' + image.attr('src') + ')');
	// 	});
	// $(window).on("load", function () {

	// slider



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
	$('.callOpen').click(function () {
		body.toggleClass('call-opened');
		$.fn.fullpage.setAllowScrolling(false);
	});
	
	$('.full-modal-open-js').click(function (even) {
		even.preventDefault();
		body.toggleClass('call-opened2');
		// $.fn.fullpage.setAllowScrolling(false);
		var imgSrc = this.dataset.img
		var img = '<img src="' + imgSrc + '">'
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
	$(window).on('load scroll resize', function () {
		// if ($(this).scrollTop() > 0) body.toggleClass('page-scrolled');
	});
	JSCCommon.headSlider();
	$(window).on('load', function () {
		// preloader
		prld.delay(150).fadeOut().find('i').fadeOut();
		// masonry 

		// $grid.one( 'layoutComplete', fullPage())
	});


	var galleryThumbs = new Swiper('.gallery-thumbs', {

		slidesPerView: 'auto',
		// loop: true,
		// freeMode: true,
		// watchSlidesVisibility: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesProgress: true,
		spaceBetween: 30,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		breakpoints: {
			// when window width is <= 320px
			576: { 
				spaceBetween: 10
			} 
		}
	});
	var galleryTop = new Swiper('.gallery-top', {
		slidesPerView: 1,
		loop: true,
		loopedSlides: 5, //looped slides should be the same

		thumbs: {
			swiper: galleryThumbs,
		},
		speed: 400,
		effect: 'fade',
		spaceBetween: 0,
	});


	// init Masonry
var $grid = $('.row--js').masonry({ 
	columnWidth: '.grid-item',
	itemSelector: '.grid-item',
	percentPosition: true
}); 
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
});