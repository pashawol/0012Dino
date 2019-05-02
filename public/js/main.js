"use strict";

var body = $('body');
var prld = $('#preloader');

// document.ready
$(document).ready(function() {
    // mobileNav
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
        } else {
            $(this).addClass('active').find('.txt').text('закрыть');
            body.addClass('menu-opened');
            $('#crlsNav').fadeIn(250).css('display', 'flex');
        }
    });
    $('.callOpen').click(function() { body.toggleClass('call-opened');});
    $('.callClose').click(function() { body.removeClass('call-opened');});
    // pxs
    new Parallax(document.getElementById("px1"));
    new Parallax(document.getElementById("px2"));
    new Parallax(document.getElementById("px3"));
    // wow init
    new WOW().init();
    // fullpage
    // $("#wrp").onepage_scroll({
    // //    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    //    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    //    updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    //    beforeMove: function(index) {
    //     if(index==1) body.removeClass('page-scrolled');
    //     if(index==2) body.addClass('page-scrolled'); 
    //    },  // This option accepts a callback function. The function will be called before the page moves.
    //    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    //    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    //    keyboard: false,                  // You can activate the keyboard controls
    //    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
    // });
    // easyTabs
    $('.js-tabs').easytabs({
        animationSpeed: 200,
        updateHash: false
    });
    // loadWorks
    // smoothScroll
    $('#headNav a').click(function() {
        var i = $(this).parent().prevAll().length+1;
        $('#wrp').moveTo(i);
    });
    /* s:vidRoll */
    $('.vidRoll').click(function() {
        var i = $(this);
        var l = i.find('.vid');
        var f = i.find('iframe');
        var h = i.data('hash');
        var t = l.css('transition-duration');
        f.attr('src', "https://www.youtube.com/embed/"+h+"?autoplay=1");
        i.addClass('rolled'); l.addClass('rolled');
        setTimeout(function() { l.css('z-index', -1); }, t);
    }); /* e:vidRoll */

    /* s:svgHover */
    $('.svgHover').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function(data) {
            var $svg = jQuery(data).find('svg');
            if(typeof imgID !== 'undefined') {$svg = $svg.attr('id', imgID);}
            if(typeof imgClass !== 'undefined') {$svg = $svg.attr('class', imgClass+' replaced-svg');}
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))}
            $img.replaceWith($svg);
        }, 'xml');
    }); /* e:svgHover */
  
    // clickSnip
    $('.click').on('click', function() {

    });
    // js-acc
    var accItems = $('.js-acc > .item');
    var accTitles = $('.js-acc > .item > .title');
    accItems.removeClass('open').find('.desc').slideUp();
    accItems.eq(0).addClass('open').find('.desc').slideDown();
    accItems.on('click', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open').find('.desc').slideUp();
        } else {
            $(this).parent('.js-acc').find('.item').removeClass('open');
            $(this).parent('.js-acc').find('.desc').slideUp();
            $(this).addClass('open').find('.desc').slideDown();
        }
    });
    // popups
    $('.popup').popup({
        transition: 'all 0.3s',
        /*onopen: function() {
            videoPause();
            videoFrame.fadeOut();
        },
        onclose: function() {
            videoPause();
            videoFrame.fadeOut();
        },*/
        //scrolllock: true
    });
    // callerFrom
    $('[data-caller]').on('click', function() {
        var data = $(this).data('caller');
        $('#callerFrom').val(data);
    });
    // ajaxForms
    var forms = $('form');
    forms.ajaxForm(function() {
        forms.trigger('reset').popup('hide');
        $('#sender').popup('show');
    });
 
    // getYoutubeUrl
    $('[data-video]').on('click', function() {
        var frame = $('#videoPlayer'),
            data = $(this).data('video');
        if (frame.attr('src') !== data) frame.attr('src', data);
    });
 
    $('.closeParent').on('click', function() {
        $(this).parent().animate({
            opacity: 'hide',
            right: '200px',
        }, 1100, 'easeInOutBack', function() {
            $(this).remove();
        });
    });
    // parallax
});
var prld = $('#prld');
var nvWrap = $('#nvWrap');
var nvWrapIn = $('#nvWrapIn');
var scrlTop, nvWrapTop;
 

// window.resize
$(window).on("resize", function() {});

function callb() {
    $("#popup").fadeIn(), 
    $("#popup").append('<a id="popup_close"></a>'), 
    q_width = $("#popup").outerWidth() / -2, 
    q_height = $("#popup").outerHeight() / -2, 
    $("#popup").css({
    "margin-left": q_width,
    "margin-top": q_height
                    }), 
    $("body").append('<div id="fade"></div>'), 
    $("#fade").css({
    filter: "alpha(opacity=40)"
}).fadeIn(), !1
}
function ajax() {
    var e = $("#pop-form").serialize();
    $.ajax({
        type: "POST",
        url: "<?php echo esc_url( get_template_directory_uri() ); ?>/send.php",
        data: e,
        success: function() {
            $("#pop-form")[0].reset(),
            alert("Спасибо! C Вами свяжется наш специалист в течении 30 минут!"),
            $("#popup, #fade").fadeOut();
        },
        error: function() {
            alert("Ошибка! Попробуйте еще раз!")
        }
    })
} 
function ajaxx() {
    var e = $("#main-form").serialize();
    $.ajax({
        type: "POST",
        url: "<?php echo esc_url( get_template_directory_uri() ); ?>/send.php",
        data: e,
        success: function() {
            $("#main-form")[0].reset(),
            alert("Спасибо! C Вами свяжется наш специалист в течении 30 минут!");
        },
        error: function() {
            alert("Ошибка! Попробуйте еще раз!")
        }
    })
} 

// <form id="pop-form" class="contact-form" method="post" action="javascript:void(0);" onsubmit="ajax()">