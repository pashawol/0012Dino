// "use strict";

// var body = $('body');
// var prld = $('#preloader');

// // document.ready
// $(document).ready(function() {
//     // mobileNav
  
//     // fullpage
//     // $("#wrp").onepage_scroll({
//     // //    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
//     //    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
//     //    updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
//     //    beforeMove: function(index) {
//     //     if(index==1) body.removeClass('page-scrolled');
//     //     if(index==2) body.addClass('page-scrolled'); 
//     //    },  // This option accepts a callback function. The function will be called before the page moves.
//     //    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
//     //    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
//     //    keyboard: false,                  // You can activate the keyboard controls
//     //    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
//     // });
//     // easyTabs
//     // $('.js-tabs').easytabs({
//     //     animationSpeed: 200,
//     //     updateHash: false
//     // });
//     // loadWorks
//     // smoothScroll
//     $('#headNav a').click(function() {
//         var i = $(this).parent().prevAll().length+1;
//         $('#wrp').moveTo(i);
//     });
//     /* s:vidRoll */
//     $('.vidRoll').click(function() {
//         var i = $(this);
//         var l = i.find('.vid');
//         var f = i.find('iframe');
//         var h = i.data('hash');
//         var t = l.css('transition-duration');
//         f.attr('src', "https://www.youtube.com/embed/"+h+"?autoplay=1");
//         i.addClass('rolled'); l.addClass('rolled');
//         setTimeout(function() { l.css('z-index', -1); }, t);
//     }); /* e:vidRoll */

//     /* s:svgHover */
//     $('.svgHover').each(function(){
//         var $img = jQuery(this);
//         var imgID = $img.attr('id');
//         var imgClass = $img.attr('class');
//         var imgURL = $img.attr('src');
//         jQuery.get(imgURL, function(data) {
//             var $svg = jQuery(data).find('svg');
//             if(typeof imgID !== 'undefined') {$svg = $svg.attr('id', imgID);}
//             if(typeof imgClass !== 'undefined') {$svg = $svg.attr('class', imgClass+' replaced-svg');}
//             $svg = $svg.removeAttr('xmlns:a');
//             if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))}
//             $img.replaceWith($svg);
//         }, 'xml');
//     }); /* e:svgHover */
  
    
  
// });
// var prld = $('#prld');
// var nvWrap = $('#nvWrap');
// var nvWrapIn = $('#nvWrapIn');
// var scrlTop, nvWrapTop;
 

// // window.resize
// $(window).on("resize", function() {});
 
// // <form id="pop-form" class="contact-form" method="post" action="javascript:void(0);" onsubmit="ajax()">