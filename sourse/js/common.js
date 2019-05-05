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
							if (((lazyImage.getBoundingClientRect().top  - lazyImage.parentElement.clientHeight * 2)<= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.parentElement.clientHeight * 2) >= 0) && getComputedStyle(lazyImage).display !== "none") {
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
							if (((lazyImage.getBoundingClientRect().top - lazyImage.parentElement.clientHeight ) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.parentElement.clientHeight) >= 0) && getComputedStyle(lazyImage).display !== "none") {
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


	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},


	

	inlineSVG: function () {
		//Replace all SVG images with inline SVG
		$('img.img-svg').each(function () {
			var $img = $(this);
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			$.get(imgURL, function (data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}


				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

		});
	},


	CustomInputFile: function CustomInputFile() {
		var file = $(".add-file input[type=file]");
		file.change(function () {
			var filename = $(this).val().replace(/.*\\/, "");
			var name = $(".add-file__filename  ");
			name.text(filename);

		});
	},

	CustomYoutubeBlock: function () {
		$(".pretty-embed__bg").each(function () {
			// загрузка фона видео
			$(this).css("background-image", 'url(http://img.youtube.com/vi/' + $(this).data("src") + '/0.jpg)')
			// включение видео при клике по блоку
			$(this).click(function () {
				$(this).removeClass("on").next()
					.attr("src", 'https://www.youtube.com/embed/' + $(this).data("src") + '?autoplay=1').addClass("on");
			})
		})

	},

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
 
	fullPage: function (){

		$('#wrp').fullpage({
			sectionSelector: 'section',
			navigation:true,
			slidesNavigation:true, 
			navigationPosition:'left', 
			responsiveWidth: 991.9,
			responsiveHeight: 600, 
			scrollOverflow: true, 
			fixedElements: ".wrks__head", 
			// lazyLoading: false,
			afterLoad: function (origin, destination, direction) {
				// JSCCommon.LazyFunction();
				$(".lazy-bg-js").each(function(){
	
					$(this).parent().css('background-image', 'url(' + $(this).data('src') + ')').addClass('lazyloaded');
				})
				if (destination.index == 0) {
					// $(".count-block ").addClass("text-white");
					// $(".s-stores__col").addClass('fadeInRightBig');
				}
			},
		 
			onLeave: function (origin, destination, direction) {
				var leavingSection = this;
				// console.log(destination.index);
				
				if (origin.index == 0) {
					// $(".count-block ").addClass("text-white");
					// $(".s-stores__col").addClass('fadeInRightBig');
					$("body").addClass('page-scrolled'); 
				}
				else{
					$("body").removeClass('page-scrolled');

				}
				
				if (destination.index == 1) {
					// $(".delievary-img").addClass('fadeIn');
					// $(".delievary-img-2").addClass('fadeInRightBig');
				}
				
				if (destination.index > 1) {
					$("body").addClass('page-next'); 
					// $(".delievary-img").addClass('fadeIn');
					// $(".delievary-img-2").addClass('fadeInRightBig');
				}
				else{
					$("body").removeClass('page-next');

				}

				
			},
		});
	},
	headSlider: function(){
		var swiper4 = new Swiper('.prm__slider--js', {
			// slidesPerView: 5,
			// slidesPerView: 'auto',
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
			loopFillGroupWithBlank: true, 
			on: {
				init: function () {
					/* do something */
				},
				
				slideChange: function () { 
					circle();  
				},
				
			} 
		}); 
		$(window).on('load', function() {

			circle();
		});
				function circle() {
					$(".swiper-pagination-bullet").find("svg").remove();
					$(".swiper-pagination-bullet-active ").circliful({
							animation: 1,
							animationStep: 2,
							foregroundBorderWidth: 15,
							backgroundBorderWidth: 15,
							percent: 100,  
							backgroundColor:"none",
							foregroundColor:  '#ff7c22',
							// percentages: [10, 20, 30]
							// halfCircle: 1,
							multiPercentage: 1,
						}
						, function(){
							swiper4.slideNext(400, 	false); 

						}
						); 
				}
			
	}

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

	JSCCommon.inlineSVG();

	JSCCommon.CustomInputFile();

	JSCCommon.CustomYoutubeBlock();

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
	$('#crlsNav').fadeOut(250);
}
body.click(function(e) { if ($(e.target).closest('#headNav a').length != 0) hideMenu(); });
$('#menuOpen').click(function(e) {
	e.preventDefault();
	if(body.hasClass('menu-opened')) {
			hideMenu();
			$.fn.fullpage.setAllowScrolling(true);
	} else {
			$(this).addClass('active').find('.txt').text('закрыть');
			body.addClass('menu-opened');
			$('#crlsNav').fadeIn(250).css('display', 'flex');
			$.fn.fullpage.setAllowScrolling(false);

	}
});
$('.callOpen').click(function() { body.toggleClass('call-opened');});
$('.callClose').click(function() { body.removeClass('call-opened');});
// pxs
// new Parallax(document.getElementsByClassName("px1"));
// new Parallax(document.getElementsByClassName("px2"));
// new Parallax(document.getElementsByClassName("px3"));
// wow init
new WOW().init();
	
	
	






		// document.querySelector('.scrollable').onwheel = e => e.stopPropagation();
		// window.load
		
		// window.load-scroll-resize
		$(window).on('load scroll resize', function() {
			// if ($(this).scrollTop() > 0) body.toggleClass('page-scrolled');
		});
		JSCCommon.headSlider();
		$(window).on('load', function() {
							// preloader
			prld.delay(150).fadeOut().find('i').fadeOut();
							// masonry 
							
							// $grid.one( 'layoutComplete', fullPage())
				});
});